function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

    // console.log(cartWrapper.children.length); // проверяем кол-во элементов внутри блока

    if (cartWrapper.children.length > 0) {

        cartEmptyBadge.classList.add('none'); // скрываем блок отвечающий за показ "корзина пуста" добавляя none
        orderForm.classList.remove('none');


    } else {

        cartEmptyBadge.classList.remove('none'); // показываем блок отвечающий за показ "корзина пуста" удаляя none
        orderForm.classList.add('none');

    }


}