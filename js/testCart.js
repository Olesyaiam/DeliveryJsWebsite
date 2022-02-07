    // див внутри корзины в который мы добавляем товары
    const cartWrapper = document.querySelector('.cart-wrapper');

    // Отслеживаем клик на странице
    window.addEventListener('click',function (event){

    // Проверяем что клик был совершен по кнопке "добавить в корзину"
    if(event.target.hasAttribute('data-cart')){

        //находим карту с товаром, где был клик
      const card =  event.target.closest('.card'); // поиск родителя по классу

      // собираем данные с этого товара по айдишкам (сначало обращаемся к ним) и записываем все в объект productInfo
      const productInfo = {
          // id: card.querySelector('.card mb-4').getAttribute('data-id'),
          id: card.dataset.id, // id которое содержится в диве карты
          //чтобы найти тэг img, обращаемся к селектору и далее получаем значение атрибута src
          imgSrc: card.querySelector('.product-img').getAttribute('src'),
          title: card.querySelector('.item-title').innerText,
          itemsInBox: card.querySelector('[data-items-in-box]').innerText,
          weight: card.querySelector('.price__weight').innerText,
          price: card.querySelector('.price__currency').innerText,
          counter: card.querySelector('[data-counter]').innerText,
      }
        console.log(productInfo);

        // интерполируем
        // шаблонизация
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                <div class="cart-item__top">
                                    <div class="cart-item__img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>
                                    <div class="cart-item__desc">
                                        <div class="cart-item__title">${productInfo.title}</div>
                                        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                        <!-- cart-item__details -->
                                        <div class="cart-item__details">

                                            <div class="items items--small counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>

                                            <div class="price">
                                                <div class="price__currency">${productInfo.price}</div>
                                            </div>

                                        </div>
                                        <!-- // cart-item__details -->

                                    </div>
                                </div>
                            </div>`;


    // отобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML);//позволяет вставлять кусок разметки внутрь элемента
    }
})