<template>
  <div>
    <span>
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!!'
    }
  }
}
</script>

<style scoped>
span {
  font-weight: bold;
}
</style>