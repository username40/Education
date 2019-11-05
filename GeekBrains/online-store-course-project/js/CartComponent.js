Vue.component('cart', {
    data() {
        return {
            cartUrl: '/getBasket.json',
            cart: [],
            showCart: false
        }
    },
    methods: {
        addProduct(product){
            this.$parent.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result === 1){
                    let find = this.cart.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                    } else {
                        let prod = Object.assign({quantity: 1}, product);
                        this.cart.push(prod)
                    }
                } else {
                    alert('Error');
                }
            })
        },
        remove(product) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if(data.result === 1){
                    if(product.quantity > 1) {
                        product.quantity--;
                    } else {
                        this.cart.splice(this.cart.indexOf(product), 1) 
                    }
                }
        })
        },
        clearCart() {
            this.cart.splice(0,this.cart.length)
        },
        calcSum(){
            return this.cart.reduce((accum, item) => accum += item.price * item.quantity, 0);
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
           .then(data => {
               for(let el of data.contents){
                   this.cart.push(el);
               }
           });
    },
    template: `
    <div class="header__cart" @click="showCart = !showCart">
        <img src="img/header/cart.svg" alt="product cart">
        <span class="cart-value">{{cart.length}}</span>
        <div class="header__cart-dropdown" v-show="showCart">
            <div class="square"></div>
            <br>
            <p v-if="!cart.length">Cart is empty</p>
            <cart-item v-for="item of cart" :key="item.id_product" :cart-item="item" @remove="remove"></cart-item>
            <p class="header__cart-dropdown-total-amount"><span>TOTAL</span>
                <span id="totalAmount">{{calcSum()}}$</span>
            </p>
            <a href="checkout-page.html" class="header__dropdown-cart-proceed-your-order-link">checkout</a>
        <a href="shopping-cart-page.html" class="header__dropdown-cart-proceed-your-order-link">go to cart</a>
        </div>
    </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div class="header__cart-dropdown-cart-item">
    <a href="single-page.html" class="header__cart-dropdown-item-link">
        <img :src="cartItem.img_src" alt="cart-item icon">
        <div class="header__cart-dropdown-cart-item-description">
            <h3 class="header__cart-dropdown-item-title">{{cartItem.product_name}}</h3>
            <span class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </span>
            <p class="header__cart-dropdown-price">
                <span class="header-dropdown-price-quantity">{{cartItem.quantity}}</span> x <span>{{cartItem.price}} = {{cartItem.quantity * cartItem.price}}$</span>
            </p>
        </div>
    </a>
    <button class="header__cart-dropdown-delete-from-cart-btn" @click="$emit('remove', cartItem)" @click.stop>
        <i class="fas fa-times-circle"></i>
    </button>
</div>
    `
});



