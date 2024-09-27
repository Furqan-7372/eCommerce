// StoreScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StoreNavigator from '../../Navigation/StoreNavigator/StoreNavigator';

const StoreScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Store</Text>
      <StoreNavigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default StoreScreen;
