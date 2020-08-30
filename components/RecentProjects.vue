<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="primary text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading class="my-5">
          農園紹介
        </base-heading>
        <base-text class="subtitle-1 mb-5">
          ○ヘクタールの広大な農園<br>
          ○月〜○月にはピロキオーネを栽培<br>
          山梨の土地を生かした？○○な栽培を実施<br>
          ※どんな農園なのか。栽培品種等を紹介。上はとりあえず適当に書いてみただけ。
        </base-text>

        <v-card color="secondary">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a href="#">
                  <v-img
                    :src="require(`@/assets/${project}.jpg`)"
                    max-height="300"
                    max-width="300"
                  />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/18340.jpg')"
          height="100%"
          opacity="0.1"
          class="recent__background"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'RecentProjects',

  data: () => ({
    projects: [
      'project1',
      'project2',
      'project3',
      '18339'
    ]
  })
}
</script>

<style lang="scss" scoped>
// sass-loader などを入れているとする
.recent__background {
  opacity: 0.8;
}
</style>
