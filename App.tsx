import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MainNavigator from './src/Navigation/MainNavigator/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/Store'; // Adjust the path based on your structure

const App = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
