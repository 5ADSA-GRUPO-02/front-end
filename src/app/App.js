import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.tituloBranco}>Hemo<Text style={styles.tituloVermelho}>Connect</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  tituloBranco: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  tituloVermelho: {
    fontSize: 28,
    fontWeight: '700',
    color: '#A72730',
    marginBottom: 8,
  },
});
