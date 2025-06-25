<template>
  <div :class="['card', customClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    customClass: {
      type: [String, Array, Object],
      default: ''
    }
  }
}
</script>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.card-login {
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 15px;
}
</style>
