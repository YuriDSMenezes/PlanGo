import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthState {
  userUid: string | null;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: string | null;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setDate] = useState<AuthState>(() => {
    const userUid = localStorage.getItem('@brothersLub:userID');
    if (userUid) {
      return { userUid: JSON.parse(userUid) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const userUid = '';

    localStorage.setItem('@brothersLub:userID', JSON.stringify(userUid));

    setDate({ userUid });
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@brothersLub:userID');

    setDate({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.userUid, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
