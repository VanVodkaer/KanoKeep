<template>
  <button class="action-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.action-btn {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.action-btn {
  background-color: #4caf50;
  color: white;
}

.action-btn:hover {
  background-color: #45a049;
}
</style>
