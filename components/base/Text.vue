<template>
  <p
    class="subtitle font-weight-light"
    style="line-height: 1.8 !important;"
  >
    <slot />
  </p>
</template>

<script>
export default {
  name: 'BaseText'
}
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: 'ChihayaFont' !important;
}
</style>
