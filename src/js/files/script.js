// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

const mobButton = document.querySelector('.mob-nav__title');
if (mobButton) {
  mobButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobButton.parentElement.classList.toggle('active');
  });
}
const checkRow = document.querySelectorAll('.form__check-row');
if (checkRow.length) {
  checkRow.forEach((row) => {
    const checkbox = row.querySelector('input[type=checkbox]');
    if (checkbox) {
      if (checkbox.checked) {
        row.classList.add('active');
      } else {
        row.classList.remove('active');
      }
      checkbox.addEventListener('change', (e) => {
        if (checkbox.checked) {
          row.classList.add('active');
        } else {
          row.classList.remove('active');
        }
      });
    }
  });
}
