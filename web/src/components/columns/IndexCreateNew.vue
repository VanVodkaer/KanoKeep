<script setup>
import ActionButton from "@/components/buttons/ActionButton.vue";
import DeleteButton from "@/components/buttons/DeleteButton.vue";
import { ref } from "vue";

const item = ref("");
const money = ref(0);

import { useListsStore } from "@/stores/list.js";
const ListsStore = useListsStore();
function handleCreate() {
  if (money.value === "" || isNaN(parseFloat(money.value))) {
    alert("请正确输入金额!");
    money.value = 0; // 清空金额输入
    return;
  }
  if (item.value === "") {
    alert("请输入记账项目!");
    return;
  }
  ListsStore.addList({ date: +new Date(), money: parseFloat(money.value), item: item.value });
  money.value = 0; // 清空金额输入
  item.value = ""; // 清空物品输入
}

import { useStatusStore } from "@/stores/status";
const StatusStore = useStatusStore();

function handleCancel() {
  StatusStore.changeisCreating();
  money.value = 0;
  item.value = "";
}
</script>

<template>
  <section id="create-new">
    <h3>新增记账</h3>
    <span>名称：</span><input type="text" v-model="item" /> <span>金额：</span><input type="text" v-model="money" />
    <span
      ><ActionButton style="margin-left: 10px" @click="handleCreate()"> 添加 </ActionButton>
      <DeleteButton style="margin-left: 10px" @click="handleCancel()">取消</DeleteButton></span
    >
  </section>
</template>

<style></style>
