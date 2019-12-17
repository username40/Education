import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'

export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
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
