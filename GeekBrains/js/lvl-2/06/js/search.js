Vue.component('search', {
    data(){
        return {
            userSearch: ''
        }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    // props: ['filtered'],
    template: `<form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="userSearch">
    <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
    </button>
</form>`
})