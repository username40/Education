// Андрей здравствуйте! Решил 1 задание следующим образом - поскольку корзина это самостоятельная сущность
// я не придумал ничего лучше как написать очень похоже на ProductsList и ProductItem
// В задании было "Добавьте пустые классы для корзины товаров и элемента корзины товаров." Я решил попробовать
// отрисовать корзину как если бы там уже были добавлены товары заодно и попрактиковаться

// Задание 2 я решил следующим образом - решил не выделять вывод суммы товаров в самостоятельный метод а включить его в
// renderCart() решение использовать Array.prototype.reduce() подсмотрел на тостере(но все равно изучил как он работает
// в документации, у него неплохая поддержка так что думаю его без проблем можно использовать)
// Почему то не получилось у меня сгенерировать полноценный html здесь как это сделано в cartItemRender()
// поэтому пришлось захардкодить его в html

// Задание 3 к сожалению не хватило времени сделать и подумать над ним.
class Cart {
    constructor(cartContainer = '.cart-overlay') {
        this.cartContainer = cartContainer;
        this.cartList = [];
        this.cartProductsList = [];
        this._fetchProductsInCart()
    }

    _fetchProductsInCart() {
        this.cartList = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20}
        ]
    }

    renderCart() {
        const cartBlock = document.querySelector(this.cartContainer);
        for (let productItem of this.cartList) {
            const productInCartObj = new CartProductItem(productItem);
            this.cartProductsList.push(productInCartObj);
            cartBlock.insertAdjacentHTML('beforeend', productInCartObj.cartItemRender());
        }
        const result = this.cartProductsList.reduce((a, b) => a + b.price, 0);
        let totalAmount = document.querySelector("#totalAmount");
        totalAmount.insertAdjacentHTML('beforebegin', result);
    }
}

class CartProductItem {
    constructor(productItem, img = 'https://placehold.it/100x100') {
        this.title = productItem.title;
        this.price = productItem.price;
        this.id = productItem.id;
        this.img = img;
    }

    cartItemRender() {
        return `<div class="cart__item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="cart__desc">
                    <h3 class="cart__item-title">${this.title}</h3>
                    <p class="cart__item-price">${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts()
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
            {id: 5, title: 'Chair', price: 150}
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
list.render();
let cart = new Cart();
cart.renderCart();

// Так же написал простенькую функцию которая отображает/скрывает корзину по клику
function showHideCart() {
    const element = document.querySelector('.hide-cart');
    element.classList.toggle('show-cart');
}
// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50},
//     {id: 5, title: 'Chair', price: 150},
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                 <img src="${img}" alt="Some img">
//                 <div class="desc">
//                     <h3>${product.title}</h3>
//                     <p>${product.price} $</p>
//                     <button class="buy-btn">Купить</button>
//                 </div>
//             </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//     // document.createElement()
//
//     // for (let element of list){
//         // document.getElementById().innerHTML += element;
//         // document.getElementById().insertAdjacentHTML('beforeend', element);
//     // }
// };
//
// renderPage(products);

