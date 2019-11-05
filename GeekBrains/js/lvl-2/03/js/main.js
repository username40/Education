const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// 1. Я переделал getRequest так чтобы он использовал промисы. Проверил на файле tel.json все работает, ответ приходит
// let getRequest = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", 'tel.json', true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 resolve(xhr.response);
//             } else{
//                 reject(xhr.responseText)
//             }
//         }
//     }
//     xhr.send();
// })

class Cart {
    constructor(cartContainer = '.cart-overlay') {
        this.cartContainer = cartContainer;
        this.cartList = [];
        this.cartProductsList = [];
        this._fetchProductsInCart()
                .then(data => {
                    this.cartList = [...data];
                    this.renderCart()
                });
    }

    _fetchProductsInCart() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    renderCart() {
        const cartBlock = document.querySelector(this.cartContainer);
        for (let productItem of this.cartList) {
            const productInCartObj = new CartProductItem(productItem);
            this.cartProductsList.push(productInCartObj);
            cartBlock.insertAdjacentHTML('beforeend', productInCartObj.cartItemRender());
        }
        const result = this.cartProductsList.reduce((a, b) => a += b.price, 0);
        let totalAmount = document.querySelector("#totalAmount");
        totalAmount.insertAdjacentHTML('beforebegin', result);
    }
}

class CartProductItem {
    constructor(productItem, img = 'https://placehold.it/100x100') {
        this.product_name = productItem.product_name;
        this.price = productItem.price;
        this.id_product = productItem.id_product;
        this.img = img;
    }

    cartItemRender() {
        return `<div class="cart__item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="cart__desc">
                    <h3 class="cart__item-title">${this.product_name}</h3>
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
            {id_product: 1, product_name: 'Notebook', price: 2000},
            {id_product: 2, product_name: 'Mouse', price: 20},
            {id_product: 3, product_name: 'Keyboard', price: 200},
            {id_product: 4, product_name: 'Gamepad', price: 50},
            {id_product: 5, product_name: 'Chair', price: 150}
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
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn" data-price="${this.price}" data-name="${this.product_name}" data-id="${this.id_product}" onclick="addToCart">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
list.render();
let cart = new Cart();
cart.renderCart();

function showHideCart() {
    const element = document.querySelector('.hide-cart');
    element.classList.toggle('show-cart');
}