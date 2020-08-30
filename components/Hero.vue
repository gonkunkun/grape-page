<template>
  <section
    id="hero"
    class="overflow-hidden"
  >
    <v-container fluid fill-height class="hero__content">
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center hero__string" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">
            Sasaki's grape vineyard
          </h1>
          <h4 class="subheading">
            山梨県のぶどう農園
            ※ぶどう農園のコンセプトやキーワードを記述
          </h4>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Hero',

  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
// sass-loader などを入れているとする
.hero__content {
  background: url("../assets/18338.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
}

.hero__string {
  color: var(--white);
}
</style>
