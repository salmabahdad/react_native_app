// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'wishlist_items';

export const loadItems = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erreur de chargement :', e);
    return [];
  }
};

export const saveItem = async (item) => {
  const items = await loadItems();
  const newItems = [...items, item];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
};

export const updateItem = async (updatedItem) => {
  const items = await loadItems();
  const newItems = items.map((i) => (i.id === updatedItem.id ? updatedItem : i));
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
};

export const deleteItem = async (id) => {
  const items = await loadItems();
  const newItems = items.filter((i) => i.id !== id);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
};
