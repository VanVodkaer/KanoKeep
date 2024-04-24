import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { localRead, localWrite } from "@/utils/HandleList.js";

export const useListsStore = defineStore("lists", () => {
  const list = ref([]);
  const totalMoney = computed(() => list.value.reduce((total, item) => (total += item.money), 0));

  function loadList() {
    list.value = localRead();
  }
  function updateList(dateIndex, item, money) {
    const index = list.value.findIndex((el) => el.date === dateIndex);
    if (index !== -1) {
      // 确保找到了有效的索引
      list.value[index].item = item;
      list.value[index].money = money;
      localWrite(list.value);
    }
  }
  function addList(newItem) {
    list.value.push(newItem);
    localWrite(list.value);
  }
  function delList(dateIndex) {
    const index = list.value.findIndex((item) => item.date === dateIndex);
    list.value.splice(index, 1);
    localWrite(list.value);
  }

  return {
    list,
    totalMoney,
    updateList,
    addList,
    delList,
    loadList,
  };
});
