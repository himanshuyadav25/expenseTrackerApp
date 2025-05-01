// components/ExpenseForm.js
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import uuid from 'react-native-uuid';
import DatePicker from '../utils/DatePicker';

export default function ExpenseForm({onAdd}) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (!title || !amount || !date) return;

    onAdd({id: uuid.v4(), title, amount, date});
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
      />
      <TextInput
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        mode="outlined"
        keyboardType="numeric"
      />
      <TextInput
        label="Date"
        value={date}
        onChangeText={setDate}
        mode="outlined"
        placeholder="YYYY-MM-DD"
      />
      <DatePicker onSave={dateStr => setDate(dateStr)} />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Add Expense
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 15},
  button: {marginTop: 10},
});
