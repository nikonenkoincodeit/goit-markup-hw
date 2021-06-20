const heroButtonRef = document.querySelector('.js-hero__button');
const wrapperPopupRef = document.querySelector('.js-wrapper-popup');
const closePopupRef = document.querySelector('.js-close-popup');

function togglePopup() {
  wrapperPopupRef.classList.toggle('open');
}

heroButtonRef.addEventListener('click', togglePopup);
closePopupRef.addEventListener('click', togglePopup);
