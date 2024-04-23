<script setup>
import IndexList from "@/components/columns/lists/IndexList.vue";
import { useListsStore } from "@/stores/list";
const ListStore = useListsStore();
</script>

<template>
  <section id="recent-transactions">
    <h2>最近交易</h2>
    <ul>
      <IndexList v-for="item in ListStore.list" :key="item.date" :item="item"></IndexList>
    </ul>
  </section>
</template>

<style scoped></style>
