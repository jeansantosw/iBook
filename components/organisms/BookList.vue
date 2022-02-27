<template>
  <div class="book-list">
    <h2>Listar Livros</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { books } from "@/store";

export default Vue.extend({
  computed: {
    $book() {
      return books.$all;
    }
  }
});
</script>

<style lang="scss" scoped>
.book-list {
}
</style>
