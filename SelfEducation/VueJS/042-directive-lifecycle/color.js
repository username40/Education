export default {
    // write bind method - use 3 params
    // wrrite what you need
    bind(el, bindings, vnode) {
        console.log('bind')
        el.style.color = 'red';
    },
    inserted(el, bindings, vnode) {
        console.log('inserted');
    },
    // 4 param it's old v-node 
    update(el, bindings, vnode, oldVnode) {
        console.log('update');
    },
    componentUpdated(el, bindings, vnode, oldVnode) {
        console.log('componentUpdated');
    },
    // deleted from DOM
    unbind(){
        console.log('unbind');
    }
}