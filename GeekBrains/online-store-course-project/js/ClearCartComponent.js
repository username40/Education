Vue.component('clear-cart',{
    data() {
        return {
            cartUrl: '/getBasket.json',
            cart: []
        }
    },
    methods: {
        clearCart() {
            this.cart.splice(0,this.cart.length)
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
    <button class="action-with-shopping-cart" @click="clearCart()">cLEAR SHOPPING CART</button>
    `
})