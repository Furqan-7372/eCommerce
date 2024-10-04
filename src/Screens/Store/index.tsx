import React from 'react';
import {View, StyleSheet} from 'react-native';
import StoreNavigator from '../../Navigation/StoreNavigator/StoreNavigator';
import {IStoreScreen} from '../../Interfaces/index';
import styles from './style';

const StoreScreen: React.FC<IStoreScreen>= () => {
  return (
    <View style={styles.container}>
      <StoreNavigator />
    </View>
  );
};

export default StoreScreen;
