<template>
  <div class="add-item-form">
    <input
      v-model="newItem"
      placeholder="Adicionar item"
      @keyup.enter="addItem"
      class="input-field"
    />
    <select v-model="selectedCategory" class="select-field">
      <option value="" disabled>Selecione uma categoria</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <button @click="addItem" class="add-button">Adicionar</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const newItem = ref("");
const selectedCategory = ref("");
const errorMessage = ref("");

const categories = computed(() => store.state.categories);

const addItem = () => {
  if (!newItem.value.trim()) {
    errorMessage.value = "O nome do item não pode estar vazio.";
    return;
  }
  if (!selectedCategory.value) {
    errorMessage.value = "Por favor, selecione uma categoria.";
    return;
  }

  store.commit("addItem", {
    name: newItem.value.trim(),
    category: selectedCategory.value,
    purchased: false,
  });

  newItem.value = "";
  selectedCategory.value = "";
  errorMessage.value = "";
};
</script>

<style scoped>
.add-item-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}

.input-field,
.select-field {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #9b59b6;
  border-radius: 5px;
  background-color: #2c2c2c;
  color: white;
}

.add-button {
  padding: 10px;
  background-color: #9b59b6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error {
  color: #e74c3c;
  margin-top: 8px;
}
</style>
