<template>
    <h1>{{ user.name }}</h1>
</template>

<script>
    export default {
      validate({params}) {
        console.log(params)
        return /^\d+$/.test(params.id)
      },
      asyncData({params}) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              user: {
                name: `test user ${params.id}`
              }
            })
          },1500)
        })
      }
    }
</script>

<style scoped>

</style>
