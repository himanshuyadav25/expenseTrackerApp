// components/ExpenseItem.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text, IconButton} from 'react-native-paper';

export default function ExpenseItem({item, onDelete}) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <View>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
          </View>
          <View style={styles.right}>
            <Text>₹{item.amount}</Text>
            <IconButton
              icon="delete"
              color={'red'}
              onPress={() => onDelete(item.id)}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {marginVertical: 5},
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  right: {alignItems: 'flex-end'},
});
