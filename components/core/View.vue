<template>
  <div>
    <hero />

    <welcome />

    <recent-projects />

    <services />

    <about-me />

    <get-in-touch />
  </div>
</template>

<script>
export default {
  name: 'CoreView',

  components: {
    Hero: () => import('@/components/Hero'),
    AboutMe: () => import('@/components/AboutMe'),
    GetInTouch: () => import('@/components/GetInTouch'),
    RecentProjects: () => import('@/components/RecentProjects'),
    Services: () => import('@/components/Services'),
    Welcome: () => import('@/components/Welcome')
  }
}
</script>
