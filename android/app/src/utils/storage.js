// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_KEY = 'expenses';

export const getExpenses = async () => {
  try {
    const json = await AsyncStorage.getItem(EXPENSES_KEY);
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Failed to load expenses', e);
    return [];
  }
};

export const saveExpenses = async data => {
  try {
    const json = JSON.stringify(data);
    await AsyncStorage.setItem(EXPENSES_KEY, json);
  } catch (e) {
    console.error('Failed to save expenses', e);
  }
};
