const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

async function getSheetsService() {
  const credentialsJson = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  if (!credentialsJson) {
    throw new Error('GOOGLE_APPLICATION_CREDENTIALS env var not set');
  }

  const credentials = JSON.parse(credentialsJson);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

async function appendBidToSheet(bid) {
  const spreadsheetId = process.env.SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error('SPREADSHEET_ID env var not set');
  }

  const sheets = await getSheetsService();
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[bid.artworkId, bid.amount, bid.bidder, bid.time]],
    },
  });
}

const bids = [];

app.get('/bids', (req, res) => {
  res.json(bids);
});

app.post('/bid', async (req, res) => {
  const { artworkId, amount, bidder } = req.body;
  if (!artworkId || !amount || !bidder) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const bid = { artworkId, amount, bidder, time: new Date().toISOString() };
  bids.push(bid);

  try {
    await appendBidToSheet(bid);
  } catch (err) {
    console.error('Error writing to Sheets:', err);
  }

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
