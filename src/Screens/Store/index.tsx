// StoreScreen.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import StoreNavigator from '../../Navigation/StoreNavigator/StoreNavigator';
import {IStoreScreen} from '../../Interfaces/index';

const StoreScreen: React.FC<IStoreScreen>= () => {
  return (
    <View style={styles.container}>
      <StoreNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StoreScreen;
