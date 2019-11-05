Vue.component('cart-table', {
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
    <div>
    <div class="shopping-cart">
        <div class="container">
        <table class="shopping-cart__table">
                    <tr>
                        <th class="shopping-cart__title">Product details</th>
                        <th class="shopping-cart__title">Unite price</th>
                        <th class="shopping-cart__title">quantity</th>
                        <th class="shopping-cart__title">shipping</th>
                        <th class="shopping-cart__title">subtotal</th>
                        <th class="shopping-cart__title">action</th>
                    </tr>
                    <cart-table-item v-for="item of cart" :key="item.id_product" :cart-item="item" @remove="remove"></cart-table-item>
        </table>
        </div>
        <div class="actions-with-shopping-cart container">
        <button class="action-with-shopping-cart" @click="clearCart()">cLEAR SHOPPING CART</button>
        <a href="product-page.html" class="action-with-shopping-cart">cONTINUE sHOPPING</a>
    </div>
    </div>
    <contact-details></contact-details>
    </div>
    `
});



Vue.component('cart-table-item', {
    props: ['cartItem'],
    template: `
    <tr class="shopping-cart__item">
    <td>
        <a href="single-page.html" class="shopping-cart__item-link-to-good">
            <img :src="cartItem.img_src" alt="cart image">
            <div class="shopping-cart__item-description">
                <h4 class="shopping-cart__item-description-title">{{cartItem.product_name}}</h4>
                <p class="shopping-cart__item-description-parametres">size: <span>XXL</span></p>
                <p class="shopping-cart__item-description-parametres">color: <span>Red</span></p>
            </div>
        </a>
    </td>
    <td>{{cartItem.price}}$</td>
    <td>
        <input type="number" class="shopping-cart__item-input-number" v-model.number="cartItem.quantity" min="1">
    </td>
    <td>FREE</td>
    <td>{{ cartItem.quantity * cartItem.price }}$</td>
    <td>
        <button class="header__cart-dropdown-delete-from-cart-btn" @click="$emit('remove', cartItem)"><i class="fas fa-times-circle"></i>
        </button>
    </td>
</tr>
    `
});
Vue.component('contact-details',{
    template: `
    <article class="contact-details">
    <div class="container">
        <form action="#" class="contact-details__form">
            <h3 class="contact-details__title">Shipping Adress</h3>
            <select name="country" class="contact-details__input">
                <option value="Bangladesh">Bangladesh</option>
                <option value="Usa">Usa</option>
                <option value="Russia">Russia</option>
            </select>
            <input type="text" class="contact-details__input" placeholder="State">
            <input type="text" class="contact-details__input" placeholder="ZIPcode">
            <button type="submit" class="contact-details__form-btn">get a quote</button>
        </form>
        <form action="#" class="contact-details__form">
            <h3 class="contact-details__title">coupon discount</h3>
            <p class="contact-details__description">Enter your coupon code if you have one</p>
            <input type="text" class="contact-details__input" placeholder="Coupon">
            <button type="submit" class="contact-details__form-btn">Apply coupon</button>
        </form>
        <div class="contact-details__proceed-to-checkout">
            <h4 class="contact-details__proceed-to-checkout__title_sub-total">Sub total <span>{{$parent.calcSum()}}$</span></h4>
            <h3 class="contact-details__proceed-to-checkout__title_grand-total">GRAND TOTAL <span>{{$parent.calcSum()}}$</span></h3>
            <a href="checkout-page.html" class="contact-details__proceed-to-checkout__link">proceed to checkout</a>
        </div>
    </div>
</article>
    `
})