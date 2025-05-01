// DatePicker.js
import React, {useState} from 'react';
import {View, Button, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';

const CustomDatePicker = ({onSave}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const formatDate = dateObj => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <View>
      <Button title="Select Date" onPress={() => setOpen(true)} />

      <Text style={{marginVertical: 10}}>
        Selected Date: {formattedDate || 'None'}
      </Text>

      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={selectedDate => {
          setOpen(false);
          setDate(selectedDate);
          const str = formatDate(selectedDate);
          setFormattedDate(str);
          onSave(str); // optional callback
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  );
};

export default CustomDatePicker;
