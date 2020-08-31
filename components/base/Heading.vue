<template>
  <component
    :is="tag"
    class="display-2 v-heading mb-3 font-weight-light"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseHeading',

  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-heading {
  letter-spacing: 3px !important;
  font-family: 'ChihayaFont' !important;
}
</style>
