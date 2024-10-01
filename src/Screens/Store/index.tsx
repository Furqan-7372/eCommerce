// StoreScreen.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Fonts from '../../Assets/Fonts/index';
import StoreNavigator from '../../Navigation/StoreNavigator/StoreNavigator';

const StoreScreen: React.FC = () => {
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
  header: {
    fontSize: 24,
    fontFamily: Fonts.metropolisSemiBold,
    textAlign: 'center',
  },
});

export default StoreScreen;
