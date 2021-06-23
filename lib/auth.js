import { useState, useEffect, useContext, createContext } from 'react';

import firebase from './firebase';
import { createUser } from './db';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signInWithGithub = () =>
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user));

  const signOut = () =>
    firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => handleUser(user));

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
};

const formatUser = (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  provider: user.providerData[0].providerId,
  photo: user.photoURL,
});
