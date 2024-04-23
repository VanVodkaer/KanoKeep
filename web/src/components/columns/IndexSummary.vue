<script setup>
import ActionButton from "@/components/buttons/ActionButton.vue";
import DeleteButton from "../buttons/DeleteButton.vue";

import { useListsStore } from "@/stores/list.js";
const ListsStore = useListsStore();

import { useStatusStore } from "@/stores/status";
const StatusStore = useStatusStore();
</script>

<template>
  <section id="account-summary">
    <h2>账户概览</h2>
    <p>总余额: ¥{{ ListsStore.totalMoney || 0 }}</p>
    <ActionButton id="add-entry" @click="StatusStore.changeisCreating()" style="margin-right: 10px">
      新增记账
    </ActionButton>
    <DeleteButton id="delete-selected">删除选中</DeleteButton>
  </section>
</template>

<style scoped></style>
