<template>
  <div class="shopping-list-container">
    <FilterButtons />

    <div v-if="filteredItems.length === 0" class="empty-message">
      Nenhum item na lista. Adicione algo!
    </div>

    <div class="shopping-list">
      <div
        v-for="(item, index) in filteredItems"
        :key="index"
        class="item-card"
      >
        <div v-if="editingIndex !== index" class="item-details">
          <input
            type="checkbox"
            :checked="item.purchased"
            @change="togglePurchased(index)"
          />
          <span :class="{ purchased: item.purchased }">{{ item.name }}</span>
          <span class="item-category">{{ item.category }}</span>
        </div>

        <div v-else class="edit-form">
          <input
            v-model="editedItem.name"
            @keyup.enter="saveEdit"
            class="edit-input"
            placeholder="Nome do item"
          />
          <select v-model="editedItem.category" class="edit-select">
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>

        <div class="actions">
          <button
            v-if="editingIndex === index"
            @click="saveEdit"
            class="save-button"
          >
            Salvar
          </button>
          <button v-else @click="startEdit(index)" class="edit-button">
            Editar
          </button>
          <button @click="removeItem(index)" class="delete-button">
            Remover
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";
import FilterButtons from "./FilterButtons.vue";
import { ShoppingItem } from "@/types";

const store = useStore();
const editingIndex = ref<number | null>(null);
const editedItem = ref<ShoppingItem>({
  name: "",
  category: "",
  purchased: false,
});

const filteredItems = computed(() => store.getters.filteredItems);
const categories = computed(() => store.state.categories);

const togglePurchased = (index: number) => {
  store.commit("togglePurchased", index);
};

const startEdit = (index: number) => {
  const item = filteredItems.value[index];
  editedItem.value = { ...item };
  editingIndex.value = index;
};

const saveEdit = () => {
  if (!editedItem.value.name.trim()) {
    alert("O nome do item não pode estar vazio.");
    return;
  }

  if (editingIndex.value !== null) {
    store.commit("editItem", {
      index: editingIndex.value,
      newItem: {
        ...editedItem.value,
        name: editedItem.value.name.trim(),
      },
    });

    editingIndex.value = null;
    editedItem.value = {
      name: "",
      category: "",
      purchased: false,
    };
  }
};

const removeItem = (index: number) => {
  if (confirm("Tem certeza que deseja remover este item?")) {
    store.commit("removeItem", index);
    if (editingIndex.value === index) {
      editingIndex.value = null;
      editedItem.value = {
        name: "",
        category: "",
        purchased: false,
      };
    }
  }
};
</script>

<style scoped>
.shopping-list-container {
  margin-top: 20px;
}

.empty-message {
  text-align: center;
  color: #9b59b6;
  font-size: 18px;
  margin: 20px 0;
}

.shopping-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.item-card {
  background-color: #444;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.item-details {
  display: flex;
  align-items: center;
  gap: 10px;
}

.purchased {
  text-decoration: line-through;
  color: #7f8c8d;
}

.item-category {
  color: #9b59b6;
  font-size: 14px;
}

.actions {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.actions button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #8e049b;
  color: white;
}

.delete-button {
  background-color: #e74c3c;
}

.edit-form {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.edit-input,
.edit-select {
  padding: 8px;
  border: 1px solid #9b59b6;
  border-radius: 5px;
  background-color: #2c2c2c;
  color: white;
}
</style>
