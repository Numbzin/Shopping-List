export interface ShoppingItem {
  name: string;
  category: string;
  purchased: boolean;
}

export interface RootState {
  shoppingList: ShoppingItem[];
  categories: string[];
  currentFilter: "all" | "purchased" | "notPurchased";
}
