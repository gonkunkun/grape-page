<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >
        <base-bubble-1 style="transform: translate(5%, -5%)" />

        <base-heading class="info--text">
          農園主
        </base-heading>

        <base-text class="mb-5">
          佐々木<br>
          これまでの自分の紹介<br>
          ※写真と名前だけでも良いかも。写真は農園と自分が写っている写真があるとベスト。ぶどう栽培にかける想いや何かがあれば記述。
        </base-text>
      </v-col>
      <v-col
        md="6"
      >
        <v-img
          :src="require('@/assets/sample.jpg')"
          height="50vh"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: 'Web Design',
        value: 100
      },
      {
        name: 'Web Development',
        value: 75
      },
      {
        name: 'Web Support',
        value: 90
      }
    ]
  })
}
</script>
