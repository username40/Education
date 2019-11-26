export default {
  bind(el, bindings, vnode) {
    // el.style.color = 'red'
    // use bindings.value - if you want to change it and make flexible
    el.style.color = bindings.value
  }
}
