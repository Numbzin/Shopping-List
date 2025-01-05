import { createStore } from "vuex";
import { RootState, ShoppingItem } from "@/types";

const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  const stored = localStorage.getItem(key);
  try {
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (error) {
    console.error(`Erro ao carregar chave ${key} do localStorage:`, error);
    return defaultValue; // Retorna o valor padrão em caso de erro
  }
};

export default createStore<RootState>({
  state: {
    shoppingList: loadFromStorage("shoppingList", []),
    categories: [
      "Frutas",
      "Verduras",
      "Carnes",
      "Laticínios",
      "Bebidas",
      "Outros",
    ],
    currentFilter: loadFromStorage("currentFilter", "all"),
  },

  mutations: {
    addItem(state, item: ShoppingItem) {
      state.shoppingList.push(item);
      localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },

    editItem(state, { index, newItem }) {
      state.shoppingList[index] = { ...state.shoppingList[index], ...newItem };
      localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },

    removeItem(state, index: number) {
      state.shoppingList.splice(index, 1);
      localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },

    togglePurchased(state, index: number) {
      state.shoppingList[index].purchased =
        !state.shoppingList[index].purchased;
      localStorage.setItem("shoppingList", JSON.stringify(state.shoppingList));
    },

    setFilter(state, filter: "all" | "purchased" | "notPurchased") {
      state.currentFilter = filter;
      localStorage.setItem("currentFilter", JSON.stringify(filter));
    },
  },

  getters: {
    filteredItems: (state) => {
      switch (state.currentFilter) {
        case "purchased":
          return state.shoppingList.filter((item) => item.purchased);
        case "notPurchased":
          return state.shoppingList.filter((item) => !item.purchased);
        default:
          return state.shoppingList;
      }
    },
  },
});
