<script setup>
import KanoHeader from "@/components/main/KanoHeader.vue";
import KanoFooter from "@/components/main/KanoFooter.vue";

import IndexSummary from "@/components/columns/IndexSummary.vue";
import IndexLists from "@/components/columns/lists/IndexLists.vue";
</script>

<template>
  <KanoHeader></KanoHeader>
  <div id="main-content">
    <!-- 账户概览 -->
    <IndexSummary></IndexSummary>
    <!-- 最近交易 -->
    <IndexLists></IndexLists>
  </div>
  <KanoFooter></KanoFooter>
</template>

<style scoped>
#main-content {
  padding: 20px;
}
</style>
