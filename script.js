const markerList = document.querySelectorAll('.map__marker');
const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupText = document.querySelector('.popup__text');
const buttonPrevious = document.querySelector('.slider__button_previous');
const buttonNext = document.querySelector('.slider__button_next');
const nameDistrict = document.querySelector('.name-district__text');

//откритие/закрытие попапа
for (let marker of markerList) {
  function addClassOpenPopup() {
    popupElement.classList.add('popup_is-opened');
    popupText.textContent = marker.dataset.description + " район";
  }
  function removeClassOpenPopup() {
    popupElement.classList.remove('popup_is-opened');
  }

  marker.addEventListener('click', addClassOpenPopup);
  popupCloseButton.addEventListener('click', removeClassOpenPopup);
  document.addEventListener('keydown', removeClassOpenPopup);
}

//листаем маркеры вперед
buttonNext.addEventListener('click', () => {
  for (let marker of markerList) {
    const nextActive = marker.nextElementSibling;

    if (marker.classList.contains('map__marker_active')) {
      console.log(nextActive.dataset.description)
      nameDistrict.textContent = nextActive.dataset.description + " район";
      marker.classList.remove('map__marker_active');
      nextActive.classList.add('map__marker_active');
      buttonPrevious.classList.remove('slider__button_disable');
      buttonPrevious.disabled = false;

      if (!nextActive.nextElementSibling) {
        buttonNext.classList.add('slider__button_disable');
        buttonNext.disabled = true;
      }
      break
    }
  }
});

//листаем маркеры назад
buttonPrevious.addEventListener('click', () => {
  for (let marker of markerList) {
    const previousActive = marker.previousElementSibling;

    if (marker.classList.contains('map__marker_active')) {
      console.log(previousActive.dataset.description)
      nameDistrict.textContent = previousActive.dataset.description + " район";
      marker.classList.remove('map__marker_active');
      previousActive.classList.add('map__marker_active');
      buttonNext.classList.remove('slider__button_disable');
      buttonNext.disabled = false;

      if (!previousActive.previousElementSibling) {
        buttonPrevious.classList.add('slider__button_disable');
        buttonPrevious.disabled = true;
      }
      break
    }
  }
});