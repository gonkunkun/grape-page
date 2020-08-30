<template>
  <v-footer
    height="180"
    class="justify-center"
  >
    <v-row>
      <v-col
        cols="12"
        md="12"
        align="center"
        justify="center"
      >
        <social-media large />
      </v-col>
      <v-col
        cols="12"
        md="12"
        align="center"
        justify="center"
      >
        <base-text class="caption">
          Copyright © 2020 佐々木農園.
        </base-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'CoreFooter',

  components: {
    SocialMedia: () => import('@/components/SocialMedia')
  }
}
</script>
