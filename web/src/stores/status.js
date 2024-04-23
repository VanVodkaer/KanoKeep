import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatusStore = defineStore("status", () => {
  const isCreating = ref(false);
  function changeisCreating() {
    isCreating.value = !isCreating.value;
  }
  return { isCreating, changeisCreating };
});
