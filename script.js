const feed = document.getElementById('feed');
const loader = document.getElementById('loader');

// Replace these placeholders with your actual YouTube or Vimeo embed URLs
const projectCatalog = [
  {
    title: "Cinematic Travel Commercial",
    category: "Color Grading & Cut",
    client: "Tourism Campaign",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "SaaS Explainer Motion Graphics",
    category: "After Effects / 3D",
    client: "Fintech Startup",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "High-Pacing Short-Form Reel",
    category: "Vertical / Shorts",
    client: "Creator Brand",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Automotive Spec Commercial",
    category: "Sound Design & Pace",
    client: "Motorsport Edit",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

let loadCount = 0;
const BATCH_SIZE = 4;

function createCard(item, index) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-media">
      <iframe 
        src="${item.videoUrl}" 
        title="${item.title}" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        loading="lazy"
        allowfullscreen>
      </iframe>
    </div>
    <div class="card-info">
      <span class="tag">${item.category}</span>
      <h2>${item.title} #${index + 1}</h2>
      <p>Client: ${item.client}</p>
    </div>
  `;
  return card;
}

function loadMoreProjects() {
  // Simulates infinite scroll by cycling through your catalog items
  for (let i = 0; i < BATCH_SIZE; i++) {
    const dataIndex = (loadCount) % projectCatalog.length;
    const card = createCard(projectCatalog[dataIndex], loadCount);
    feed.appendChild(card);
    loadCount++;
  }
}

// Observe the loader element at the bottom
const observer = new IntersectionObserver((entries) => {
  const target = entries[0];
  if (target.isIntersecting) {
    // Artificial small delay to make the spinner transition feel natural
    setTimeout(() => {
      loadMoreProjects();
    }, 400);
  }
}, {
  rootMargin: '150px' // Pre-fetches cards 150px before reaching screen bottom
});

// Initial load
loadMoreProjects();
observer.observe(loader);