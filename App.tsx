import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Router } from './src/navigation/router';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
};

export default App;
