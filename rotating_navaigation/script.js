const open = document.querySelector('.btn-open');
const close = document.querySelector('.btn-close');

const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));
