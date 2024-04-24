import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatusStore = defineStore("status", () => {
  const isCreating = ref(false);
  function changeisCreating() {
    isCreating.value = !isCreating.value;
  }
  const selectItem = ref([]);
  function addItemSelect(date) {
    if (selectItem.value.findIndex((item) => item === date) === -1) {
      selectItem.value.push(date);
    }
  }
  function delItemSelect(date) {
    if (selectItem.value.findIndex((item) => item === date) !== -1) {
      const index = selectItem.value.findIndex((item) => item === date);
      selectItem.value.splice(index, 1);
    }
  }
  return { isCreating, changeisCreating, selectItem, addItemSelect, delItemSelect };
});
