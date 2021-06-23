import firebase from './firebase';

const db = firebase.firestore();

export const createUser = (uid, data) =>
  db
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
