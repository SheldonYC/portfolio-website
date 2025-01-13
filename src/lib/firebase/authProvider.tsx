// use client to use react hooks, file extension should be .tsx isntead of .ts
"use client"
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./config";

type AuthContextType = {
  user: string | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export function login(): void {
    if (auth.currentUser) {
      console.log('lib/firebase/service - Already logged in')
    } else {
      signInAnonymously(auth)
      .then(() =>  console.log('Signed in anonymously'))
      .catch((error) => {
        const { code, message } = error;
        console.log( 'Error: lib/firebase/service - Failed to login', code, message)
      })
    }
  }

export const AuthProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  login();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(`Current User: ${uid}`);
        setUser(uid);
      } else {
        console.log('Signed out... Goodbye!');
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};