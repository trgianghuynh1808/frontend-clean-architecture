<script setup lang="ts">
import { dependenciesLocator } from "shared";
import { usePlocState } from "./hooks/usePlocState";
import { onMounted } from "vue";

const productPloc = dependenciesLocator.provideProductsPloc();
const state = usePlocState(productPloc);

onMounted(() => {
  productPloc.search("asdasds");
});
console.log(productPloc);
</script>

<template>pre {{ state }}</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
