<template>
  <div>
    <!-- ヒーローページ -->
    <hero />

    <!-- コンセプト -->
    <welcome />

    <!-- 農園紹介 -->
    <recent-projects />

    <!-- 農園主紹介 -->
    <about-me />

    <!-- 農園紹介 -->
    <vine-yard />

    <!-- <services /> -->

    <!-- 問合せフォーム -->
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
    // Services: () => import('@/components/Services'),
    Welcome: () => import('@/components/Welcome'),
    VineYard: () => import('@/components/VineYard')
  }
}
</script>
