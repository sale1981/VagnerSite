const service = document.querySelector('#service');
const quoteLink = document.querySelector('#quote-link');
function updateQuote() {
  quoteLink.href = 'https://wa.me/5511993152411?text=' + encodeURIComponent('Olá! Gostaria de solicitar um orçamento para: ' + service.value + '.');
}
service.addEventListener('change', updateQuote);
updateQuote();
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuToggle.focus();
  }
});
