// app.js - Kokomo Art Association Online Auction

/* ==============================
   Data (artworks + organization)
============================== */
const data = {
  artworks: [
    {
      id: 1,
      title: "Autumn Reflections",
      artist: "Sarah McCollum",
      medium: "Oil on Canvas",
      dimensions: "24\" x 36\"",
      year: 2024,
      startingBid: 150,
      currentBid: 275,
      estimatedValue: "400-600",
      description:
        "A vibrant autumn landscape capturing the golden light reflecting off a quiet pond. The artist masterfully uses warm oranges and deep reds to create a sense of seasonal transition.",
      artistBio:
        "Sarah McCollum is a local Kokomo artist specializing in landscape paintings. She has been a member of the Kokomo Art Association for 8 years and regularly exhibits at the Artworks Gallery.",
      auctionEnd: "2025-08-15T18:00:00",
      bidHistory: [
        { amount: 150, bidder: "Anonymous", time: "2025-07-10T14:30:00" },
        { amount: 175, bidder: "Anonymous", time: "2025-07-12T09:15:00" },
        { amount: 200, bidder: "Anonymous", time: "2025-07-14T16:45:00" },
        { amount: 225, bidder: "Anonymous", time: "2025-07-15T11:20:00" },
        { amount: 250, bidder: "Anonymous", time: "2025-07-15T19:30:00" },
        { amount: 275, bidder: "Anonymous", time: "2025-07-16T08:10:00" }
      ]
    },
    {
      id: 2,
      title: "Urban Harmony",
      artist: "Michael Chen",
      medium: "Acrylic on Canvas",
      dimensions: "20\" x 24\"",
      year: 2024,
      startingBid: 100,
      currentBid: 185,
      estimatedValue: "300-450",
      description:
        "A contemporary piece exploring the intersection of urban architecture and natural elements. Bold geometric shapes contrast with organic flowing forms.",
      artistBio:
        "Michael Chen is a contemporary artist based in Kokomo, known for his abstract interpretations of urban landscapes. He teaches art classes at the Kokomo Art Center.",
      auctionEnd: "2025-08-20T20:00:00",
      bidHistory: [
        { amount: 100, bidder: "Anonymous", time: "2025-07-08T10:00:00" },
        { amount: 125, bidder: "Anonymous", time: "2025-07-10T14:20:00" },
        { amount: 150, bidder: "Anonymous", time: "2025-07-13T16:30:00" },
        { amount: 175, bidder: "Anonymous", time: "2025-07-15T12:45:00" },
        { amount: 185, bidder: "Anonymous", time: "2025-07-16T09:15:00" }
      ]
    },
    {
      id: 3,
      title: "Prairie Wildflowers",
      artist: "Dixie Ben-net",
      medium: "Watercolor",
      dimensions: "16\" x 20\"",
      year: 2024,
      startingBid: 125,
      currentBid: 210,
      estimatedValue: "350-500",
      description:
        "A delicate watercolor celebrating Indiana's native wildflowers. The piece captures the ethereal beauty of prairie blooms with masterful color blending.",
      artistBio:
        "Dixie Ben-net is a renowned watercolor artist and longtime member of the Kokomo Art Association. Her work is featured in the permanent collection at the Kokomo Art Center.",
      auctionEnd: "2025-08-18T19:30:00",
      bidHistory: [
        { amount: 125, bidder: "Anonymous", time: "2025-07-09T11:30:00" },
        { amount: 150, bidder: "Anonymous", time: "2025-07-11T15:20:00" },
        { amount: 175, bidder: "Anonymous", time: "2025-07-13T10:45:00" },
        { amount: 200, bidder: "Anonymous", time: "2025-07-15T17:30:00" },
        { amount: 210, bidder: "Anonymous", time: "2025-07-16T07:20:00" }
      ]
    },
    {
      id: 4,
      title: "Highland Park Memories",
      artist: "Lesley Wysong",
      medium: "Mixed Media",
      dimensions: "18\" x 24\"",
      year: 2024,
      startingBid: 175,
      currentBid: 310,
      estimatedValue: "450-650",
      description:
        "A nostalgic mixed media piece featuring Highland Park, home to the Kokomo Art Center. Layers of paint, collage, and drawing create a rich textural experience.",
      artistBio:
        "Lesley Wysong serves as the Art Center Curator for the Kokomo Art Association. Her innovative mixed media works explore themes of community and place.",
      auctionEnd: "2025-08-22T18:30:00",
      bidHistory: [
        { amount: 175, bidder: "Anonymous", time: "2025-07-07T09:00:00" },
        { amount: 200, bidder: "Anonymous", time: "2025-07-09T13:45:00" },
        { amount: 225, bidder: "Anonymous", time: "2025-07-11T16:20:00" },
        { amount: 250, bidder: "Anonymous", time: "2025-07-13T11:15:00" },
        { amount: 275, bidder: "Anonymous", time: "2025-07-14T18:40:00" },
        { amount: 300, bidder: "Anonymous", time: "2025-07-15T14:25:00" },
        { amount: 310, bidder: "Anonymous", time: "2025-07-16T10:30:00" }
      ]
    },
    {
      id: 5,
      title: "Ceramic Vessel Series #3",
      artist: "Robert Martinez",
      medium: "Glazed Ceramic",
      dimensions: "12\" x 8\" x 8\"",
      year: 2024,
      startingBid: 80,
      currentBid: 145,
      estimatedValue: "250-350",
      description:
        "A beautifully crafted ceramic vessel featuring earth-tone glazes and organic forms. Part of the artist's exploration of traditional pottery techniques.",
      artistBio:
        "Robert Martinez is a ceramic artist who teaches pottery workshops at the Kokomo Art Center. His work draws inspiration from both contemporary and traditional pottery traditions.",
      auctionEnd: "2025-08-25T17:00:00",
      bidHistory: [
        { amount: 80, bidder: "Anonymous", time: "2025-07-12T08:30:00" },
        { amount: 95, bidder: "Anonymous", time: "2025-07-13T14:15:00" },
        { amount: 110, bidder: "Anonymous", time: "2025-07-14T16:45:00" },
        { amount: 125, bidder: "Anonymous", time: "2025-07-15T10:20:00" },
        { amount: 145, bidder: "Anonymous", time: "2025-07-16T11:45:00" }
      ]
    },
    {
      id: 6,
      title: "Main Street Dusk",
      artist: "Angela Walthour",
      medium: "Oil on Canvas",
      dimensions: "30\" x 40\"",
      year: 2024,
      startingBid: 200,
      currentBid: 385,
      estimatedValue: "550-800",
      description:
        "A stunning cityscape of downtown Kokomo's Main Street at dusk. The warm glow of streetlights creates a romantic atmosphere in this detailed urban scene.",
      artistBio:
        "Angela Walthour is a prominent member of the Kokomo Art Association known for her detailed urban landscapes. Her work frequently features recognizable Kokomo landmarks.",
      auctionEnd: "2025-08-28T19:00:00",
      bidHistory: [
        { amount: 200, bidder: "Anonymous", time: "2025-07-06T12:00:00" },
        { amount: 225, bidder: "Anonymous", time: "2025-07-08T15:30:00" },
        { amount: 275, bidder: "Anonymous", time: "2025-07-10T09:45:00" },
        { amount: 300, bidder: "Anonymous", time: "2025-07-12T17:20:00" },
        { amount: 325, bidder: "Anonymous", time: "2025-07-14T13:10:00" },
        { amount: 350, bidder: "Anonymous", time: "2025-07-15T16:35:00" },
        { amount: 385, bidder: "Anonymous", time: "2025-07-16T09:55:00" }
      ]
    }
  ],
  organization: {
    name: "Kokomo Art Association",
    established: 1926,
    mission: "To bring art to the community by bringing the community to the art",
    auctionDetails: {
      duration: "One Month",
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
        <p class="artwork-medium">${art.medium}</p>
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
      if (priceVal === '400+') return bid > 400;
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