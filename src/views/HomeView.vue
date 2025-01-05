<template>
  <div class="container">
    <h1>Lista de Compras</h1>
    <AddItem />
    <ShoppingList />
  </div>
</template>

<script setup lang="ts">
import AddItem from "@/components/AddItem.vue";
import ShoppingList from "@/components/ShoppingList.vue";
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 190px;
  text-align: center;
}

h1 {
  color: #9b59b6;
  margin-bottom: 35px;
}
</style>
