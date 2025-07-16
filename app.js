// app.js - Kokomo Artist Alley Online Art Auction

/* ==============================
   Data (Artist Alley artworks)
============================== */
const data = {
  artworks: [
    {
      id: 1,
      title: "Highland Covered Bridge",
      artist: "Alyson Hatcher-Kendall",
      medium: "Acrylic on marine board",
      dimensions: "4' x 4'",
      year: 2025,
      startingBid: 300,
      currentBid: 300,
      estimatedValue: "300-450",
      description: "A beautiful depiction of Indiana's covered bridge heritage",
      artistBio: "Alyson Hatcher-Kendall is a talented artist whose work captures the historic charm of Indiana's architectural heritage.",
      auctionEnd: "2025-08-15T18:00:00",
      bidHistory: [
        { amount: 300, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 2,
      title: "Complex Autumn",
      artist: "Dajanell Johnson",
      medium: "Acrylic on marine board",
      dimensions: "3' x 4'",
      year: 2025,
      startingBid: 300,
      currentBid: 300,
      estimatedValue: "300-450",
      description: "Vibrant autumn colors captured in layered brushstrokes",
      artistBio: "Dajanell Johnson creates dynamic works that celebrate the natural beauty of seasonal transitions.",
      auctionEnd: "2025-08-16T18:00:00",
      bidHistory: [
        { amount: 300, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 3,
      title: "Righteous Judgement",
      artist: "Deb Edwards",
      medium: "Acrylic on marine board",
      dimensions: "5'6\" x 3'",
      year: 2025,
      startingBid: 400,
      currentBid: 400,
      estimatedValue: "400-600",
      description: "A powerful statement piece exploring themes of justice",
      artistBio: "Deb Edwards is known for her thought-provoking artwork that addresses social and moral themes.",
      auctionEnd: "2025-08-17T18:00:00",
      bidHistory: [
        { amount: 400, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 4,
      title: "Fairy House",
      artist: "Lana Kirtley",
      medium: "Fabric on marine board",
      dimensions: "4' x 4'",
      year: 2025,
      startingBid: 300,
      currentBid: 300,
      estimatedValue: "300-450",
      description: "Whimsical textile art bringing fantasy to life",
      artistBio: "Lana Kirtley specializes in mixed media textile art that creates magical, otherworldly scenes.",
      auctionEnd: "2025-08-18T18:00:00",
      bidHistory: [
        { amount: 300, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 5,
      title: "Kittyo's Rainbow",
      artist: "Jaetta Hall",
      medium: "Acrylic and fabric",
      dimensions: "72\" x 80\"",
      year: 2025,
      startingBid: 160,
      currentBid: 160,
      estimatedValue: "160-240",
      description: "Joyful mixed media piece celebrating color and creativity",
      artistBio: "Jaetta Hall creates vibrant mixed media works that celebrate joy and the power of color.",
      auctionEnd: "2025-08-19T18:00:00",
      bidHistory: [
        { amount: 160, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 6,
      title: "AI USA",
      artist: "Patrick Redmon",
      medium: "AI art printed on aluminum",
      dimensions: "4' x 5'",
      year: 2025,
      startingBid: 800,
      currentBid: 800,
      estimatedValue: "800-1200",
      description: "Contemporary digital art exploring technology and patriotism",
      artistBio: "Patrick Redmon is a contemporary artist exploring the intersection of technology and traditional artistic expression.",
      auctionEnd: "2025-08-20T18:00:00",
      bidHistory: [
        { amount: 800, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 7,
      title: "Grow & Glow",
      artist: "Mia Flowers",
      medium: "Acrylic on marine board",
      dimensions: "4' x 6'",
      year: 2025,
      startingBid: 275,
      currentBid: 275,
      estimatedValue: "275-400",
      description: "Luminous botanical artwork celebrating growth and light",
      artistBio: "Mia Flowers creates botanical art that captures the luminous quality of plant life and natural growth.",
      auctionEnd: "2025-08-21T18:00:00",
      bidHistory: [
        { amount: 275, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 8,
      title: "Broken",
      artist: "Ramona \"Mona\" Daniels",
      medium: "Acrylic on marine board",
      dimensions: "2' x 4'",
      year: 2025,
      startingBid: 715,
      currentBid: 715,
      estimatedValue: "715-1000",
      description: "Emotionally powerful piece exploring themes of resilience",
      artistBio: "Ramona \"Mona\" Daniels creates emotionally resonant artwork that explores human resilience and strength.",
      auctionEnd: "2025-08-22T18:00:00",
      bidHistory: [
        { amount: 715, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 9,
      title: "My Mind's Eye",
      artist: "Sam Prifogle",
      medium: "Acrylic on marine board",
      dimensions: "4' x 5'",
      year: 2025,
      startingBid: 500,
      currentBid: 500,
      estimatedValue: "500-750",
      description: "Introspective artwork exploring inner vision and perception",
      artistBio: "Sam Prifogle creates introspective artwork that invites viewers to explore themes of consciousness and perception.",
      auctionEnd: "2025-08-23T18:00:00",
      bidHistory: [
        { amount: 500, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 10,
      title: "Flowers for Kokomo",
      artist: "Oscar Toloza",
      medium: "Acrylic on marine board",
      dimensions: "8' x 8'",
      year: 2025,
      startingBid: 600,
      currentBid: 600,
      estimatedValue: "600-900",
      description: "Large-scale floral tribute to the Kokomo community",
      artistBio: "Oscar Toloza creates large-scale works that celebrate community and the beauty of local landmarks.",
      auctionEnd: "2025-08-24T18:00:00",
      bidHistory: [
        { amount: 600, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 11,
      title: "Radiant Wilds",
      artist: "Michelle Sutton",
      medium: "Spray paint (interior/exterior)",
      dimensions: "8' x 8'",
      year: 2025,
      startingBid: 3000,
      currentBid: 3000,
      estimatedValue: "3000-4500",
      description: "Bold spray paint artwork capturing the beauty of wild nature",
      artistBio: "Michelle Sutton is a contemporary artist who uses spray paint to create bold, dynamic works celebrating natural beauty.",
      auctionEnd: "2025-08-25T18:00:00",
      bidHistory: [
        { amount: 3000, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 12,
      title: "Joan and Magdalena",
      artist: "Tarja Harney",
      medium: "Acrylic and spray paint",
      dimensions: "3' x 3'",
      year: 2025,
      startingBid: 200,
      currentBid: 200,
      estimatedValue: "200-300",
      description: "Mixed media portrait celebrating feminine strength",
      artistBio: "Tarja Harney creates powerful mixed media portraits that celebrate strength and resilience.",
      auctionEnd: "2025-08-26T18:00:00",
      bidHistory: [
        { amount: 200, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 13,
      title: "Wildflower",
      artist: "Rose Bloom",
      medium: "Acrylic on marine board",
      dimensions: "4' x 6'",
      year: 2025,
      startingBid: 1000,
      currentBid: 1000,
      estimatedValue: "1000-1500",
      description: "Delicate botanical study showcasing Indiana's native flora",
      artistBio: "Rose Bloom specializes in botanical art that captures the delicate beauty of Indiana's native plant life.",
      auctionEnd: "2025-08-27T18:00:00",
      bidHistory: [
        { amount: 1000, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 14,
      title: "Seeds of Hope",
      artist: "Lesley Wysong",
      medium: "Acrylic on marine board",
      dimensions: "4' x 6'8\"",
      year: 2025,
      startingBid: 450,
      currentBid: 450,
      estimatedValue: "450-675",
      description: "Symbolic artwork representing growth and optimism",
      artistBio: "Lesley Wysong serves as the Art Center Curator for the Kokomo Art Association and creates symbolic works exploring themes of hope and growth.",
      auctionEnd: "2025-08-28T18:00:00",
      bidHistory: [
        { amount: 450, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 15,
      title: "Guardians of the Void",
      artist: "Marcia Blacklidge",
      medium: "Mixed media",
      dimensions: "4' x 6'",
      year: 2025,
      startingBid: 500,
      currentBid: 500,
      estimatedValue: "500-750",
      description: "Mysterious mixed media piece exploring cosmic themes",
      artistBio: "Marcia Blacklidge creates mysterious mixed media works that explore cosmic and metaphysical themes.",
      auctionEnd: "2025-08-28T18:00:00",
      bidHistory: [
        { amount: 500, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    },
    {
      id: 16,
      title: "Bridge Over Troubled Waters",
      artist: "Troy Caldwell",
      medium: "Granite sculpture",
      dimensions: "60\" x 24\" x 16\"",
      year: 2025,
      startingBid: 3000,
      currentBid: 3000,
      estimatedValue: "3000-4500",
      description: "Monumental granite sculpture offering hope and connection",
      artistBio: "Troy Caldwell is a sculptor who works in granite to create monumental pieces that offer messages of hope and connection.",
      auctionEnd: "2025-08-28T18:00:00",
      bidHistory: [
        { amount: 3000, bidder: "Anonymous", time: "2025-07-16T08:00:00" }
      ]
    }
  ],
  organization: {
    name: "Kokomo Art Association",
    established: 1926,
    mission: "To bring art to the community by bringing the community to the art",
    auctionDetails: {
      duration: "July 16 - August 28, 2025",
      commission: "30% to KAA, 70% to Artist",
      memberCommission: "25% to KAA, 75% to Artist",
      paymentMethods: ["Credit Card", "PayPal", "Bank Transfer"],
      bidIncrements: [25, 50, 100]
    }
  }
};

/* ==============================
   Global State
============================== */
let currentSection = 'home';
let selectedArtworkId = null;
let pendingBid = null;

/* ==============================
   Utilities
============================== */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function formatCurrency(num) {
  return `$${num.toLocaleString()}`;
}

function formatDateTime(dateStr) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateStr).toLocaleString(undefined, options);
}

function getTimeRemaining(endTime) {
  const total = Date.parse(endTime) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function timeRemainingString(endTime) {
  const { total, days, hours, minutes, seconds } = getTimeRemaining(endTime);
  if (total <= 0) return 'Auction Ended';
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

/* ==============================
   Section Navigation
============================== */
function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  
  // Hide all sections
  $$('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Remove active class from all nav links
  $$('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Show target section
  const targetSection = $(`#${sectionId}`);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
    
    // Update active nav link
    const navLink = $(`.nav-link[data-section="${sectionId}"]`);
    if (navLink) {
      navLink.classList.add('active');
    }
  }
}

// Make showSection globally available
window.showSection = showSection;

/* ==============================
   Rendering Functions
============================== */
function renderFeatured() {
  const container = $('#featured-grid');
  if (!container) return;
  
  container.innerHTML = '';
  // Select first 3 artworks as featured
  data.artworks.slice(0, 3).forEach((art) => {
    const card = createArtworkCard(art);
    container.appendChild(card);
  });
}

function createArtworkCard(art) {
  const card = document.createElement('div');
  card.className = 'artwork-card';
  card.dataset.id = art.id;

  card.innerHTML = `
      <div class="artwork-image">${art.title}</div>
      <div class="artwork-info">
        <h3 class="artwork-title">${art.title}</h3>
        <p class="artwork-artist">by ${art.artist}</p>
        <p class="artwork-medium">${art.medium} • ${art.dimensions}</p>
        <div class="artwork-bidding">
          <div class="current-bid">
            <span>Current Bid</span>
            <span class="bid-amount">${formatCurrency(art.currentBid)}</span>
          </div>
          <span class="auction-status ${auctionStatusClass(art)}">${auctionStatusLabel(art)}</span>
          <div class="time-remaining" data-end="${art.auctionEnd}"></div>
        </div>
      </div>
  `;

  card.addEventListener('click', () => {
    openArtworkDetail(art.id);
  });

  return card;
}

function auctionStatusClass(art) {
  const { total, days } = getTimeRemaining(art.auctionEnd);
  if (total <= 0) return 'ended';
  return days < 3 ? 'ending-soon' : 'live';
}

function auctionStatusLabel(art) {
  const { total, days } = getTimeRemaining(art.auctionEnd);
  if (total <= 0) return 'Ended';
  return days < 3 ? 'Ending Soon' : 'Live Auction';
}

function renderGallery() {
  const gallery = $('#gallery-grid');
  if (!gallery) return;
  
  gallery.innerHTML = '';

  // Apply filters
  const priceFilter = $('#price-filter');
  const mediumFilter = $('#medium-filter');
  const priceVal = priceFilter ? priceFilter.value : '';
  const mediumVal = mediumFilter ? mediumFilter.value.toLowerCase() : '';

  let filtered = data.artworks;

  // Price filter
  if (priceVal) {
    filtered = filtered.filter((art) => {
      const bid = art.currentBid;
      if (priceVal === '0-200') return bid < 200;
      if (priceVal === '200-400') return bid >= 200 && bid <= 400;
      if (priceVal === '400-600') return bid >= 400 && bid <= 600;
      if (priceVal === '600-1000') return bid >= 600 && bid <= 1000;
      if (priceVal === '1000+') return bid >= 1000;
      return true;
    });
  }

  // Medium filter
  if (mediumVal) {
    filtered = filtered.filter((art) => art.medium.toLowerCase().includes(mediumVal));
  }

  if (filtered.length === 0) {
    gallery.innerHTML = '<p>No artworks match your filters.</p>';
    return;
  }

  filtered.forEach((art) => {
    const card = createArtworkCard(art);
    gallery.appendChild(card);
  });
}

/* ==============================
   Artwork Detail
============================== */
function openArtworkDetail(id) {
  selectedArtworkId = id;
  const art = data.artworks.find((a) => a.id === id);
  if (!art) return;

  const container = $('#artwork-detail-content');
  if (!container) return;

  container.innerHTML = `
    <div class="artwork-detail-image">${art.title}</div>
    <div class="artwork-detail-info">
      <h2>${art.title}</h2>
      <p><em>by ${art.artist} (${art.year})</em></p>
      <p>${art.description}</p>
      <div class="artwork-meta">
        <div class="meta-item">
          <span class="meta-label">Medium</span>
          <span class="meta-value">${art.medium}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Dimensions</span>
          <span class="meta-value">${art.dimensions}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Estimated Value</span>
          <span class="meta-value">$${art.estimatedValue}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Auction Ends</span>
          <span class="meta-value">${formatDateTime(art.auctionEnd)}</span>
        </div>
      </div>

      <div class="bidding-section">
        <div class="current-bid">
          <span>Current Bid</span>
          <span class="bid-amount" id="detail-current-bid">${formatCurrency(art.currentBid)}</span>
        </div>
        <div class="auction-status ${auctionStatusClass(art)}" id="detail-status">${auctionStatusLabel(art)}</div>
        <div class="time-remaining" id="detail-timer" data-end="${art.auctionEnd}"></div>
        <div class="bid-controls" id="bid-controls">
          ${generateIncrementButtons(art)}
        </div>
        <p id="selected-increment" class="mt-8"></p>
      </div>

      <div class="artist-bio">
        <h3>Artist Bio</h3>
        <p>${art.artistBio}</p>
      </div>
      <div class="bid-history">
        <h3>Bid History</h3>
        <div id="bid-history-list">
          ${renderBidHistory(art.bidHistory)}
        </div>
      </div>
    </div>
  `;

  // Setup increment selection
  let chosenIncrement = null;
  $$('#bid-controls .bid-increment', container).forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      $$('#bid-controls .bid-increment', container).forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const inc = parseInt(btn.dataset.increment, 10);
      chosenIncrement = inc;
      const newBid = art.currentBid + inc;
      $('#selected-increment', container).textContent = `Next bid: ${formatCurrency(newBid)}`;
      
      // Create or update place bid button
      let placeBidBtn = $('#place-bid-btn', container);
      if (!placeBidBtn) {
        placeBidBtn = document.createElement('button');
        placeBidBtn.id = 'place-bid-btn';
        placeBidBtn.className = 'btn btn--primary';
        placeBidBtn.textContent = 'Place Bid';
        $('#bid-controls', container).appendChild(placeBidBtn);
      }
      
      placeBidBtn.onclick = () => {
        pendingBid = { id: art.id, amount: newBid };
        $('#bid-confirmation-text').textContent = `You are about to place a bid of ${formatCurrency(newBid)} on "${art.title}".`;
        openBidModal();
      };
    });
  });

  // Disable controls if auction ended
  const { total } = getTimeRemaining(art.auctionEnd);
  if (total <= 0) {
    const bidControls = $('#bid-controls', container);
    if (bidControls) {
      bidControls.classList.add('hidden');
    }
  }

  showSection('artwork-detail');
}

function generateIncrementButtons(art) {
  return data.organization.auctionDetails.bidIncrements
    .map((inc) => `<button class="bid-increment" data-increment="${inc}">+${formatCurrency(inc)}</button>`)
    .join('');
}

function renderBidHistory(history) {
  return history
    .slice()
    .reverse()
    .map((item) => {
      return `<div class="bid-history-item"><span>${formatCurrency(item.amount)}</span><span class="bid-time">${formatDateTime(item.time)}</span></div>`;
    })
    .join('');
}

/* ==============================
   Bidding Modal
============================== */
function openBidModal() {
  const bidModal = $('#bid-modal');
  if (bidModal) {
    bidModal.classList.add('active');
  }
}

function closeBidModal() {
  const bidModal = $('#bid-modal');
  if (bidModal) {
    bidModal.classList.remove('active');
  }
  pendingBid = null;
}

function confirmBid() {
  if (!pendingBid) return;
  const art = data.artworks.find((a) => a.id === pendingBid.id);
  if (!art) return;
  
  art.currentBid = pendingBid.amount;
  art.bidHistory.push({
    amount: pendingBid.amount,
    bidder: 'You',
    time: new Date().toISOString()
  });
  
  closeBidModal();
  
  // Refresh UI
  renderGallery();
  if (selectedArtworkId) {
    openArtworkDetail(selectedArtworkId);
  }
}

// Make modal functions globally available
window.closeBidModal = closeBidModal;
window.confirmBid = confirmBid;

/* ==============================
   Countdown Timers
============================== */
function updateTimers() {
  // Update all .time-remaining elements
  $$('.time-remaining').forEach((el) => {
    const end = el.dataset.end;
    if (end) {
      el.textContent = timeRemainingString(end);
    }
  });
}

/* ==============================
   Init
============================== */
function init() {
  console.log('Initializing app...');
  
  // Setup navigation
  $$('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.section;
      if (target) {
        showSection(target);
      }
    });
  });

  // Setup filter event listeners
  const priceFilter = $('#price-filter');
  const mediumFilter = $('#medium-filter');
  
  if (priceFilter) {
    priceFilter.addEventListener('change', renderGallery);
  }
  
  if (mediumFilter) {
    mediumFilter.addEventListener('change', renderGallery);
  }

  // Render initial content
  renderFeatured();
  renderGallery();
  
  // Start timers
  updateTimers();
  setInterval(updateTimers, 1000);
  
  // Show home section by default
  showSection('home');
  
  console.log('App initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
