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
          <base-heading class="font-weight-bold mb-4" style="font-family: ChiyahaFont">
            佐々木園
          </base-heading>
          <base-subheading class="title">
            山梨県のぶどう農園<br>
            ※ぶどう農園のコンセプトやキーワードを記述
          </base-subheading>
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
  font-family: 'ChihayaFont' !important;
}
</style>
