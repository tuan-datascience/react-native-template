import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Root from 'Root';
import { getConfigStore } from 'stores';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={getConfigStore()}>
        <Root />
      </Provider>
    </SafeAreaProvider>
  );
}
