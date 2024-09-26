// src/App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import HomeScreen from './src/Screens/Home';
// import { Provider } from 'react-redux';
// import { store } from './src/Redux/Store/store';
// import Navigation from './src/Navigation/Navigation/index';

const App = (): React.ReactElement => {
  return (
    // <Provider store={store}>
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content" // or 'dark-content' based on your background
      />
      <HomeScreen></HomeScreen>
      {/* <Navigation /> */}
    </SafeAreaView>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00000000', // Transparent background
  },
});

export default App;
