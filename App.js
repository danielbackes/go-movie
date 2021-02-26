import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigations';

import theme from './theme';

export default function App() {
  return (         
    <PaperProvider theme={theme}>
      <Navigation>
        <StatusBar style="auto" />
      </Navigation>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);