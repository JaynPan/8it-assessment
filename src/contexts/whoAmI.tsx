import React, { useState, ComponentType } from 'react';

import createCtx from './createCtx';

export type WhoAmIContextState = {
  handleName: string;
  bio: string;
  location: string;
  gender: string;
  birthDate: string;
};

export const [useWhoAmI, CtxProvider] = createCtx<WhoAmIContextState>();

const WhoAmIProvider: ComponentType = ({ children }) => {
  const [handleName, setHandleName] = useState('Christopher H.');
  const [bio, setBio] = useState('Find me on Pikadish!');
  const [location, setLocation] = useState('Vancouver');
  const [gender, setGender] = useState('Male');
  const [birthDate, setBirthDate] = useState('1990/12/03');

  return (
    <CtxProvider
      value={{
        handleName,
        bio,
        location,
        gender,
        birthDate,
      }}
    >
      {children}
    </CtxProvider>
  );
};

export default WhoAmIProvider;
