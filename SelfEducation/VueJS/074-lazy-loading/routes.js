import VueRouter from 'vue-router'
import Home from './pages/Home'
// import Cars from './pages/Cars'
import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'


// for creating lazy loading do like this and you are be happy - or you can create function with it
// and re use it many times )))
const Cars = resolve => {
  require.ensure(['./pages/Cars.vue'], () => {
    resolve(require('./pages/Cars')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull,
          name: 'carFull',
          // for protect routing use beforeEnter and beforeLeave
          beforeEnter(to, from, next) {
            console.log('beforeEnter')
            if(true) {
              // you can manipulate it with method next!
              // true - ok | false - you don't go next
              next(true)
            } else {
              next(false)
            }
          }
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        // when we call a name of redirect our app going to cars page
        name: 'cars'
      }
    },
    {
      // * means that all pages which not created is redirect to error
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history',
  // for using hash and scroll use scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    }

    if (savedPosition) {
      return savedPosition
    }

    return {
      x: 0,
      y: 200
    }
  }
})
