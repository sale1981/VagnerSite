const service = document.querySelector('#service');
const quoteLink = document.querySelector('#quote-link');
function updateQuote() {
  quoteLink.href = 'https://wa.me/5511993152411?text=' + encodeURIComponent('Olá! Gostaria de solicitar um orçamento para: ' + service.value + '.');
}
service.addEventListener('change', updateQuote);
updateQuote();
