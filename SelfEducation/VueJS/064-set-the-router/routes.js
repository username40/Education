// here you import vue-router and your pages
import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'

// then create export default...
export default new VueRouter({
  // routes - here you can create array of routes
  routes: [
    // in all object you can write path and component which was called in the page
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    }
  ],
  // this mode means that your history will be saved
  mode: 'history'
})
