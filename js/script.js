"use strict";
var addToCartButton = document.querySelector('.add-to-cart-button');
var colorSelectionPopup = document.getElementById('color-selection-popup');
var colorOptions = document.querySelectorAll('.color-option');

addToCartButton.addEventListener('click', function() {
	console.log('Виберіть колір');
	colorSelectionPopup.style.display = 'block';
});

colorOptions.forEach(function(option) {
	option.addEventListener('click', function() {
	  var selectedColor = option.style.backgroundColor;
	  // Выполните здесь нужные действия с выбранным цветом, например, отправьте его на сервер или обновите состояние в вашем приложении
	  console.log('Товар доданий в корзину');
	  colorSelectionPopup.style.display = 'none'; // Скрытие всплывающего окна после выбора цвета
	});
 });

document.addEventListener('click', function(event) {
	if (!colorSelectionPopup.contains(event.target) && !addToCartButton.contains(event.target)) {
	  colorSelectionPopup.style.display = 'none';
	}
 });