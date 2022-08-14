import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import WhoAmIProvider from './src/contexts/whoAmI';
import { Router } from './src/navigation/router';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <WhoAmIProvider>
        <Router />
      </WhoAmIProvider>
    </SafeAreaProvider>
  );
};

export default App;
