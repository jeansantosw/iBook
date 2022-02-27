<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import { books } from "@/store";

export default Vue.extend({
  layout: "ibook",

  async asyncData() {
    await books.index();
  }

  // computed: {
  //   $count() {
  //     return books.$count;
  //   }
  // },

  // methods: {
  //   increment() {
  //     books.increment(1);
  //   }
  // }
});
</script>
