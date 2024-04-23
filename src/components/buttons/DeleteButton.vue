<template>
  <button class="delete-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.delete-btn {
  /* margin-left: auto; */
  background-color: #f44336;
  color: white;
  /* float: right; */
}

.delete-btn:hover {
  background-color: #d32f2f;
}
</style>
