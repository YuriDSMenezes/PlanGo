import React, { FC } from 'react';

import { AuthProvider } from './AuthContext';

const AppProvider: FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
