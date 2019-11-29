<template>
  <div>
    <button
      class="on"
      :class="{'active': value}"
      @click="onChange(true)">On</button>
    <button
      @click="onChange(false)"
      :class="{'active': !value}"
      class="off">Off</button>
  </div>
</template>

<script>
    export default {
        name: "OnOff",
        props: ['value'],
        methods: {
            onChange(newValue){
              this.$emit('input', newValue)
            }
        }
    }
</script>

<style scoped>
  button {
    border: none;
    padding: 5px 15px;
    cursor: pointer;
    margin-right: 20px;
    outline: none;
  }

  button:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .5);
  }

  .on.active {
    background-color: green;
    color: #fff;
  }

  .off.active {
    background-color: red;
    color: #ffffff;
  }
</style>
