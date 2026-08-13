const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  mobileMenu.hidden = isOpen;
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  });
});

const serviceCards = [...document.querySelectorAll('.service-card')];

const selectServiceCard = (selectedCard) => {
  serviceCards.forEach((card) => {
    const isSelected = card === selectedCard;
    card.classList.toggle('service-featured', isSelected);
    card.setAttribute('aria-pressed', String(isSelected));
  });
};

serviceCards.forEach((card) => {
  card.addEventListener('click', () => selectServiceCard(card));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      selectServiceCard(card);
    }
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
