<template>
  <div>
    <hero />

    <welcome />

    <vine-yard />

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
    Welcome: () => import('@/components/Welcome'),
    VineYard: () => import('@/components/VineYard')
  }
}
</script>
