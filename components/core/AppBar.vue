<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    flat
  >
    <v-slide-x-transition>
      <!-- <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.png')"
        class="shrink"
        contain
        height="50"
      /> -->
      <base-text
        v-if="showLogo"
        class="ma-1 font-weight-bold headline"
        style="color: #D3C3BC"
      >
      佐々木園
      </base-text>
    </v-slide-x-transition>

    <v-spacer />

    <social-media />
  </v-app-bar>
</template>

<script>
export default {
  name: 'CoreAppBar',

  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  },

  data: () => ({
    showLogo: false,
    isScrolling: false
  }),

  methods: {
    onScroll () {
      const offset = window.pageYOffset
      this.isScrolling = offset > 50
      this.showLogo = offset > 200
    }
  }
}
</script>
