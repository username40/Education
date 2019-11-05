Vue.component('products',{
    data() {
        return {
            catalogUrl: '/products.json',
            products: [],
            filtered: []
        }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filtered.push(el);
               }
           });     
    },
    template: `
        <div class="products container featured-items__container">
            <product v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
    `
});

Vue.component('youmaylikealso', {
    data() {
        return {
            youMayLikeAlsoUrl: '/youMayLikeAlso.json',
            youMayLikeAlso: []
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.youMayLikeAlsoUrl}`)
           .then(data => {
               for(let el of data){
                   this.youMayLikeAlso.push(el)
               }
           });
    },
    template: `
    <div class="products container you-may-like-also__items-container featured-items__container">
        <product v-for="item of youMayLikeAlso" :key="item.id_product" :product="item"></product>
    </div>
    `
})

Vue.component('product',{
    props: ['product'],
    template: `
    <div class="featured-items__item">
    <button class="featured-items__item-add-to-cart-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">
        <img src="img/main-page/featured-items/featured-items__cart.svg" alt="cart logo"> Add to Card
    </button>
    <a href="single-page.html">
        <div class="featured-items__item-add-to-cart-overlay"></div>
        <img :src="product.img_src" alt="featured item image">
        <h3 class="featured-items__item-name">{{ product.product_name }}</h3>
        <p class="featured-items__item-price">{{ product.price }}.00$</p>
    </a>
</div>
    `
})

