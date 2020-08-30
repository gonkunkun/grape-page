<template>
  <v-app>
    <core-app-bar />
    <v-main>
      <core-view />
    </v-main>
    <core-footer />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreFooter: () => import('@/components/core/Footer'),
    CoreView: () => import('@/components/core/View')
  },
  data () {
    return {
      title: '佐々木園'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
