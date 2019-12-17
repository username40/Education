import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
// here we connect our 404 page ))
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

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
          name: 'carFull'
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
