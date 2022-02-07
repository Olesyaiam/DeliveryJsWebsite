const productsContainer = document.querySelector('#products-container');

getProducts();

//сначала получаем данные и потом прогружаем остальное
async function getProducts(){

    // получаем данные из products.json
  const response = await fetch('./js/products.json'); //первым делом ждем данные
    console.log(response);
    // парсим данные из json в js
    const productsArray =  await response.json();
    console.log(productsArray);

    renderProducts(productsArray);// включаем функцию отображение товаров

}

function renderProducts(productsArray){

    // по массиву с продуктами проходим форичем и для каждого отдельного продукта запускаем функцию
productsArray.forEach(function (item){

    //вставляем поля через интерполяцию из json файла
const productHTML = `<div class="col-md-6">
                    <div class="card mb-4" data-id="${item.id}">
                        <img class="product-img" src="img/soup/${item.imgSrc}" alt="">
                        <div class="card-body text-center">
                            <h4 class="item-title">${item.title}</h4>
                            <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>

                            <div class="details-wrapper">
                                <div class="items counter-wrapper">
                                    <div class="items__control" data-action="minus">-</div>
                                    <div class="items__current" data-counter>1</div>
                                    <div class="items__control" data-action="plus">+</div>
                                </div>

                                <div class="price">
                                    <div class="price__weight">${item.weight}г.</div>
                                    <div class="price__currency">${item.price} ₽</div>
                                </div>
                            </div>

                            <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

                        </div>
                    </div>
                </div>`;

productsContainer.insertAdjacentHTML('beforeend',productHTML);

});

}