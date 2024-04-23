<script setup>
import ActionButton from "@/components/buttons/ActionButton.vue";

import { useListsStore } from "@/stores/list.js";
const ListsStore = useListsStore();
</script>

<template>
  <section id="account-summary">
    <h2>账户概览</h2>
    <p>总余额: ¥{{ ListsStore.totalMoney }}</p>
    <ActionButton id="add-entry">新增记账</ActionButton>
    <ActionButton id="delete-selected">删除选中</ActionButton>
  </section>
</template>

<style scoped></style>
