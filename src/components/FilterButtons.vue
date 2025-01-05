<template>
  <div class="filter-buttons">
    <button
      v-for="option in filterOptions"
      :key="option.value"
      @click="setFilter(option.value)"
      :class="{ active: currentFilter === option.value }"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentFilter = computed(() => store.state.currentFilter);

const filterOptions = [
  { value: "all", label: "Todos" },
  { value: "purchased", label: "Comprados" },
  { value: "notPurchased", label: "Não Comprados" },
];

const setFilter = (filter: "all" | "purchased" | "notPurchased") => {
  store.commit("setFilter", filter);
};
</script>

<style scoped>
.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-buttons button {
  padding: 8px 16px;
  background-color: #9b59b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter-buttons button.active {
  background-color: #8e44ad;
}
</style>
