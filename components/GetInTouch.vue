<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      class="info white--text"
      no-gutters
    >
      <v-col
        class="pt-5"
        cols="12"
        md="12"
      >
        <base-bubble-1 />

        <!-- <base-heading class="mb-5">
          お問い合わせ
        </base-heading> -->
        <base-text class="subtitle-1 mx-5">
          商品の販売、農園の見学等については、返信用のメールアドレス/お電話番号、お名前をご記入の上、お問い合わせください。<br>
          ※問合せフォームは作成中<br>
        </base-text>
      </v-col>
      <v-col
        class="pb-5"
        cols="12"
        md="12"
        align="center"
        justify="center"
      >
        <base-btn>お問い合わせはこちらから</base-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'GetInTouch'
}
</script>
