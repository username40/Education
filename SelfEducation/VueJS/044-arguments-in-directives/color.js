export default {
  bind(el, bindings, vnode) {
    // for use arguments in directives you must use .arg
    const arg = bindings.arg
    el.style[arg] = bindings.value
  }
}
