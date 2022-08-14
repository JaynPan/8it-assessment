import React, { useState, ComponentType, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

import createCtx from './createCtx';

export type UserInfo = {
  handleName: string;
  bio: string;
  location: string;
  gender: string;
  birthDate: string;
};

export type WhoAmIContextState = {
  userInfo: UserInfo;
  saveUserInfoToSecureStore: (userInfo: UserInfo) => Promise<void>;
};

export const [useWhoAmI, CtxProvider] = createCtx<WhoAmIContextState>();
const CACHE_USER_INFO = 'cacheUserInfo';
const DEFAULT_USER_INFO = {
  handleName: 'Christopher H.',
  bio: 'Find me on Pikadish!',
  location: 'Vancouver',
  gender: 'Male',
  birthDate: '1990/12/03',
};

const WhoAmIProvider: ComponentType = ({ children }) => {
  const [userInfo, setUserInfo] = useState(DEFAULT_USER_INFO);

  const saveUserInfoToSecureStore = async (newUserInfo: UserInfo) => {
    setUserInfo(newUserInfo);
    await SecureStore.setItemAsync(CACHE_USER_INFO, JSON.stringify(newUserInfo));
  };

  useEffect(() => {
    (async () => {
      const cacheUserInfo = await SecureStore.getItemAsync(CACHE_USER_INFO);

      if (cacheUserInfo) {
        setUserInfo(JSON.parse(cacheUserInfo));
      }
    })();
  }, []);

  return (
    <CtxProvider
      value={{
        userInfo,
        saveUserInfoToSecureStore,
      }}
    >
      {children}
    </CtxProvider>
  );
};

export default WhoAmIProvider;
