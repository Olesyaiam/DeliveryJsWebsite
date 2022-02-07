function calcCartPriceAndDelivery() {

// // будет возвращена кол-ция элементов по данному запросу (название товара) и далее углубляемся в товар чтобы потом посчитать все
// const cartItems = document.querySelectorAll('.cart-item');
//
// let priceTotal =0;
//
// cartItems.forEach(function (item){
//
// // console.log(item);
//
// const  amountEl =  item.querySelector('[data-counter]');
// const  priceEl =  item.querySelector('.price__currency');
//
// const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
//     priceTotal = priceTotal + currentPrice;
//
// console.log(priceTotal);
// });

    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');


    let priceTotal = 0;

    // обходим блоки с ценами в корзине
    priceElements.forEach(function (item) {

        // находим кол-во товаров
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

        console.log(priceTotal);
    });

    // отображаем цену на странице
    totalPriceEl.innerText = priceTotal;

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    if (priceTotal >= 600) {

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'Бесплатно!';

    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }


}