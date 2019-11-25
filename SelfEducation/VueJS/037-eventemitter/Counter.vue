<template>
  <h1>{{ counter }}</h1>
</template>

<script>
    import {EventEmitter} from "./main";

    export default {
        name: "Counter",
        data() {
            return {
                counter: 0
            }
        },
        created() {
            // then go to component and write what you want
            // first write name of emit then payload
            EventEmitter.$on('counterUpdated', (num) => {
                this.counter += num
            })
        }
    }
</script>

<style scoped>

</style>
