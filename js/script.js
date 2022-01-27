'use strict';

console.log('Привет мир');

const images = ['img/calendar.svg','img/chair.svg','img/phone.svg']

images.forEach(el => {
	const img = document.createElement('div');
	img.className = "mini__item";
	img.style.backgroundImage = `url(${el})`;
	img.addEventListener('click', e => 
		showPopup (`<img alt='pic' src='${el}'>`)
	);
	document.body.append(img);
});

const popup = document.querySelector('.popup');
const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;

const closePopup = function (e) {
	e.target.parentElement.classList.remove('popup__active');
}

const showPopup = function (text) {
	popup.classList.add('popup__active');
	popupContent.innerHTML = text;
}

popupClose.addEventListener('click', closePopup)

/* #hw1 link(git)

1) при нажатие на поле вне картинке закрывать попап
2) предусмотреть возможность закрытия окошка по нажатию на кнопки:
	специальные клавиши работают только по событию keyup / keydown
	-esc
	-alt + f4 (preventDefault)
3) сделать интерфейс в виде lightbox - все элементы за попап становятся затененными (background-color rgba c прозрачностью)
остановить скрол
*/