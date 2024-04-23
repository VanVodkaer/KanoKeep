import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { localRead, localWrite } from "@/utils/HandleList.js";

export const useListsStore = defineStore("lists", () => {
  const list = ref([]);
  const totalMoney = computed(() => list.value.reduce((total, item) => (total += item.money), 0));
  function loadList() {
    list.value = localRead();
  }
  function updateList(newlist) {
    list.value = newlist;
    localWrite(newlist);
  }
  function addList(newitem) {
    list.value.push(newitem);
    localWrite(list.value);
  }

  return {
    list,
    totalMoney,
    updateList,
    addList,
    loadList,
  };
});
