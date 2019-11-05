const API = 'api';

const app = new Vue({
    el: '#app',
    data: {
        // catalogUrl: '/products.json',
        // cartUrl: '/getBasket.json',
        // youMayLikeAlsoUrl: '/youMayLikeAlso.json',
        // youMayLikeAlso: [],
        // products: [],
        // filtered: [],
        // cart: [],
        // showCart: false,
        showCategories: false
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        // addProduct(product){
        //     this.getJson(`${API}/addToBasket.json`)
        //     .then(data => {
        //         if(data.result === 1){
        //             let find = this.cart.find(el => el.id_product === product.id_product);
        //             if(find){
        //                 find.quantity++;
        //             } else {
        //                 let prod = Object.assign({quantity: 1}, product);
        //                 this.cart.push(prod)
        //             }
        //         } else {
        //             alert('Error');
        //         }
        //     })
        // },
        // remove(product) {
        //     this.getJson(`${API}/deleteFromBasket.json`)
        //     .then(data => {
        //         if(data.result === 1){
        //             if(product.quantity > 1) {
        //                 product.quantity--;
        //             } else {
        //                 this.cart.splice(this.cart.indexOf(product), 1) 
        //             }
        //         }
        // })
        // },
        // clearCart() {
        //     this.cart.splice(0,this.cart.length)
        // },
        // calcSum(){
        //     return this.cart.reduce((accum, item) => accum += item.price * item.quantity, 0);
        // }
    
},
    mounted() {
        // this.getJson(`${API + this.cartUrl}`)
        //    .then(data => {
        //        for(let el of data.contents){
        //            this.cart.push(el);
        //        }
        //    });
        // this.getJson(`${API + this.catalogUrl}`)
        //    .then(data => {
        //        for(let el of data){
        //            this.products.push(el);
        //            this.filtered.push(el);
        //        }
        //    });
        // this.getJson(`${API + this.youMayLikeAlsoUrl}`)
        //    .then(data => {
        //        for(let el of data){
        //            this.products.push(el);
        //            this.filtered.push(el);
        //            this.youMayLikeAlso.push(el)
        //        }
        //    });       
}
})

$("#slider").slider({
    min: 0,
    max: 1000,
    values: [0,1000],
    range: true,
    stop: function(event, ui) {
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

