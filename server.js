const express = require('express');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const thankYouMessages = [
  'Thank you for placing a bid!',
  'We appreciate your support of local art!',
  'Thanks for participating in the auction!'
];

const outbidMessages = [
  "Oh no... you've been outbid.",
  'Oops, someone placed a higher bid.',
  'Another bidder has topped your offer.'
];

const highestBids = {};

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

async function sendBidEmail(email) {
  if (!email) return;
  const msg = thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Bid Received',
      text: `${msg} Again, we would like to thank you for supporting the community of art here in Kokomo, Indiana.`
    });
  } catch (err) {
    console.error('Email send failed', err);
  }
}

async function sendOutbidEmail(email) {
  if (!email) return;
  const msg = outbidMessages[Math.floor(Math.random() * outbidMessages.length)];
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Outbid Notification',
      text: msg
    });
  } catch (err) {
    console.error('Email send failed', err);
  }
}

const bids = [];

app.get('/bids', (req, res) => {
  res.json(bids);
});

app.post('/bid', async (req, res) => {
  const { artworkId, amount, bidder, email } = req.body;
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
  const prev = highestBids[artworkId];
  if (prev && prev.email && amount > prev.amount) {
    sendOutbidEmail(prev.email);
  }
  highestBids[artworkId] = { amount, email };
  sendBidEmail(email);

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
