import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Index from './src/routes/Index'

export default function App() {
  return (
    <View style={styles.view}>
      <Index/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})