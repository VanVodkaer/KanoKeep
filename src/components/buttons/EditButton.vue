<template>
  <button class="edit-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.edit-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

.edit-btn {
  /* margin-left: auto; */
  background-color: #3646f4;
  color: white;
  /* float: right; */
}

.edit-btn:hover {
  background-color: #391be1;
}
</style>
