<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="require('@/assets/18343.jpg')"
          height="100vh"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
          height="100vh"
        >
          <v-col
            cols="10"
            md="6"
          >
            <base-heading class="info--text my-5">
              コンセプト
            </base-heading>
            <base-text class="subtitle-1">
              ○○という想いで農園を開園<br>
              ××なぶどうを日本/世界に発信<br>
              甘さにこだわる<br>
              ※農園のコンセプト/紹介を記述する。何かしらのかっこいい言葉を考えといて。<br>
            </base-text>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>
