// Video Modal Player logic
const modal = document.getElementById('videoModal');
const modalDim = document.getElementById('modalDim');
const modalClose = document.getElementById('modalClose');
const iframe = document.getElementById('videoIframe');
const cards = document.querySelectorAll('.timeline-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const videoUrl = card.getAttribute('data-video');
    if (videoUrl) {
      iframe.src = videoUrl;
      modal.classList.add('active');
    }
  });
});

function dismissPlayer() {
  modal.classList.remove('active');
  iframe.src = '';
}

modalClose.addEventListener('click', dismissPlayer);
modalDim.addEventListener('click', dismissPlayer);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') dismissPlayer();
});
