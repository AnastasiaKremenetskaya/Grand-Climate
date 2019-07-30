/**
 * index.js
 */

var HandleOrderButtonContainer = document.querySelector('#order');

//Capture click event after filling up the form
HandleOrderButtonContainer.addEventListener('click', function () {
    processOrder();
});

//Handle order and user's data 
function processOrder() {
    alert('Эта кнопка смерти! Мы  уже выехали за вами');
}

//JQuery for smooth transition
$(document).ready(function () {
    $("#preorder").on("click", function (event) {

        //Cancel standart href transition
        event.preventDefault();

        //Get needed block's id 
        var id = $(this).attr('href'),

            //Get distance between pressed button and needed block
            top = $(id).offset().top;

        //Animate transition for 1500 ms
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

$(document).ready(function () {
    $("#nav").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top}, 1500);
    });
});