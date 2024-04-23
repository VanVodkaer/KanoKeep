<script setup></script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif;
  position: relative;
}

header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  text-align: center;
}

section {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="checkbox"] {
  accent-color: #4caf50;
}
</style>
