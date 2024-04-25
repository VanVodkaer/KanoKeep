<script setup>
import DeleteButton from "@/components/buttons/DeleteButton.vue";
import EditButton from "@/components/buttons/EditButton.vue";
import ActionButton from "@/components/buttons/ActionButton.vue";
import { computed, ref, watch } from "vue";
import { useListsStore } from "@/stores/list";
const ListsStore = useListsStore();

const props = defineProps({
  item: Object,
});

const isEdit = ref(false);
const itemEdit = ref();
const moneyEdit = ref();

const itemElement = ref(null);
const moneyElement = ref(null);

function editItem() {
  itemEdit.value = props.item.item;
  moneyEdit.value = props.item.money;
  isEdit.value = true;
}
function cancelEdit() {
  isEdit.value = false;
}

function saveEdit() {
  if (moneyEdit.value === "" || isNaN(parseFloat(moneyEdit.value))) {
    ElMessageBox.alert("请正确输入金额!", "提示", {
      confirmButtonText: "OK",
    });
    moneyEdit.value = props.item.money;
    moneyElement.value.focus();
    return;
  }
  if (itemEdit.value === "") {
    ElMessageBox.alert("请输入记账项目!", "提示", {
      confirmButtonText: "OK",
    });
    itemEdit.value = props.item.item;
    itemElement.value.focus();
    return;
  }
  ListsStore.updateList(props.item.date, itemEdit.value, parseFloat(moneyEdit.value));
  isEdit.value = false;
}
function deleteEdit() {
  ListsStore.delList(props.item.date);
}

const displayMoney = computed(() => {
  if (props.item.money > 0) {
    return "收入 +￥" + props.item.money.toFixed(2);
  } else {
    return "支出 -￥" + Math.abs(props.item.money).toFixed(2);
  }
});

import { useStatusStore } from "@/stores/status";
const StatusStore = useStatusStore();
const isChecked = ref(false);
watch(isChecked, (newValue) => {
  if (newValue === true) {
    StatusStore.addItemSelect(props.item.date);
  } else {
    StatusStore.delItemSelect(props.item.date);
  }
});
</script>

<template>
  <li>
    <input type="checkbox" :id="item.id" v-model="isChecked" />
    <label v-if="!isEdit" :for="item.id">{{ displayMoney }} @ {{ item.item }}</label>
    <label v-else for="item.id">
      <span>金额：</span>
      <el-input v-model="moneyEdit" ref="moneyElement" style="width: 240px" />
      <span style="margin-left: 10px">名称：</span>
      <el-input v-model="itemEdit" ref="itemElement" style="width: 240px" />
    </label>
    <div class="btn-div">
      <EditButton v-if="!isEdit" style="margin-left: 10px" @click="editItem()">编辑</EditButton>
      <ActionButton v-if="isEdit" style="margin-left: 10px" @click="saveEdit()">保存</ActionButton>
      <EditButton v-if="isEdit" style="margin-left: 10px" @click="cancelEdit()">取消</EditButton>
      <DeleteButton style="margin-left: 10px" @click="deleteEdit()">删除</DeleteButton>
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
