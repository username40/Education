// create directive is very simple - create .js file
// then go to main.js
// directives it's a special html attribute for interaction with vue
export default {
  // directive is a function - bindings and vnode is a read only params
  bind(el, bindings, vnode) {
    el.style.color = 'red'
  }
}
