<script setup>
import DeleteButton from "@/components/buttons/DeleteButton.vue";
import EditButton from "@/components/buttons/EditButton.vue";
import { computed } from "vue";

const props = defineProps({
  item: Object,
});

const displayMoney = computed(() => {
  if (props.item.money > 0) {
    return "+" + props.item.money;
  } else {
    return props.item.money;
  }
});
</script>

<template>
  <li>
    <input type="checkbox" :id="item.id" />
    <label :for="item.id">{{ displayMoney }} - {{ item.item }}</label>
    <div class="btn-div">
      <EditButton style="margin-left: 10px">编辑</EditButton>
      <DeleteButton style="margin-left: 10px">删除</DeleteButton>
    </div>
  </li>
</template>

<style scoped>
input[type="checkbox"] {
  accent-color: #4caf50;
}
.btn-div {
  margin-left: auto;
}
</style>
