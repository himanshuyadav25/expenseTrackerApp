// screens/HomeScreen.js
import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Button, Text, Title} from 'react-native-paper';
import ExpenseItem from '../components/ExpenseItem';
import ExpenseForm from '../components/ExpenseForm';
import {getExpenses, saveExpenses} from '../utils/storage';

export default function HomeScreen() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };
    loadData();
  }, []);

  const handleAdd = async expense => {
    const updated = [expense, ...expenses];
    setExpenses(updated);
    await saveExpenses(updated);
  };

  const handleDelete = async id => {
    const updated = expenses.filter(item => item.id !== id);
    setExpenses(updated);
    await saveExpenses(updated);
  };

  const total = expenses.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0,
  );

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Expense Tracker</Title>
      <ExpenseForm onAdd={handleAdd} />
      <Text style={styles.total}>Total: ₹{total.toFixed(2)}</Text>
      <View style={{marginTop: 30}}>
        <FlatList
          data={expenses}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ExpenseItem item={item} onDelete={handleDelete} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  total: {fontSize: 18, fontWeight: 'bold', marginTop: 50},
});
