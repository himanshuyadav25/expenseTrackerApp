// App.js
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './android/app/src/screens/HomeScreen';

export default function App() {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
}
