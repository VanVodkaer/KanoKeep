import { defineStore } from "pinia";
import { computed, ref } from "vue";
// const fs = require("fs");

export const useListsStore = defineStore("lists", () => {
  const list = ref([
    { date: "1", money: 500, item: "销售收入" },
    { date: "2", money: -100, item: "食品购物" },
  ]);
  const totalMoney = computed(() => list.value.reduce((total, item) => (total += item.money), 0));

  // function getLists() {
  //   list.value = fs.readFile("data.json", (err, data) => {
  //     if (err) {
  //       alert("读取记录时发生错误");
  //       throw err;
  //     } else {
  //       list.value = JSON.parse(data);
  //     }
  //   });
  // }

  // function saveLists(data) {
  //   list.value = fs.writeFile("data.json", JSON.stringify(data), (err) => {
  //     if (err) {
  //       alert("保存记录时发生错误");
  //       throw err;
  //     }
  //   });
  // }

  return {
    list,
    // getLists, saveLists,
    totalMoney,
  };
});
