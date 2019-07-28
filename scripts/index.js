/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");

var ButtonContainer = document.querySelector('.button');

//Capture click event
ButtonContainer.addEventListener('click', function() {
    processOrder();
});

function processOrder() {
alert('Эта кнопка смерти! Мы  уже выехали за вами');
}