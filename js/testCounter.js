// Находим элементы для взаимодействия
const buttonMinis = document.querySelector('[data-action="minus"]'); // возвращает первый элемент документа, соответ. указанному селектору
const buttonPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');
// console.log(buttonMinis);
// console.log(buttonPlus);

// Отслеживаем действие клик на кнопку buttonMinis
buttonMinis.addEventListener('click',function (){

    console.log('Minus click');
    if(parseInt(counter.innerText) > 1 ) {

        counter.innerText = --counter.innerText; // убавляем единицу когда нажимаем на минус
    }

});

// Отслеживаем действие клик на кнопку buttonPlus
buttonPlus.addEventListener('click',function (){

    console.log('Plus click')
    counter.innerText = ++counter.innerText; // прибавляем единицу когда нажимаем на плюсик

});


