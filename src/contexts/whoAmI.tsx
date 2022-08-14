import React, { useState, ComponentType } from 'react';

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
  handleUserInfoOnChange: (key: keyof UserInfo) => (value: string) => void;
};

export const [useWhoAmI, CtxProvider] = createCtx<WhoAmIContextState>();

const WhoAmIProvider: ComponentType = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    handleName: 'Christopher H.',
    bio: 'Find me on Pikadish!',
    location: 'Vancouver',
    gender: 'Male',
    birthDate: '1990/12/03',
  });

  const handleUserInfoOnChange: WhoAmIContextState['handleUserInfoOnChange'] = (key) => (value) => {
    setUserInfo((prev) => {
      const newState = { ...prev };
      newState[key] = value;
      return newState;
    });
  };

  return (
    <CtxProvider
      value={{
        userInfo,
        handleUserInfoOnChange,
      }}
    >
      {children}
    </CtxProvider>
  );
};

export default WhoAmIProvider;
