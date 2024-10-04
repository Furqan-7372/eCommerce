import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import MainNavigator from './src/Navigation/MainNavigator/MainNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/Redux/Store/Store';

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
          <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
            <MainNavigator />
          </PersistGate>
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
