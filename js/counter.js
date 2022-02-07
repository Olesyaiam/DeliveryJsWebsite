//Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
    //console.log('click here!');
    // console.log(event.target.dataset.action); // event.target(элемент по которму кликнули) dataset (дата атрибуты) action (действие атрибута)


    let counter;

    // проверяем действительно ли мы кликнули по кнопке минус или плюс и тогда будем искать родителя
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper'); // находим ближайшего родителя соответ. определен. селектору (ищем по классу)

        // находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]'); // элемент родителя и находим интересующий элемент через селектор
    }


    // Проверяем является ли элемент по которому кликнули мышкой кнопкой Plus
    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент по которому кликнули мышкой кнопкой Minus
    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {

            counter.innerText = --counter.innerText; // убавляем единицу когда нажимаем на минус
            // проверка на товар находится ли он именно в корзине
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

            // удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            //  отображение статуса корзины пустая или полная
            toggleCartStatus();

            calcCartPriceAndDelivery();

        }
    }
    // проверяем клики на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {

        calcCartPriceAndDelivery();

    }


});