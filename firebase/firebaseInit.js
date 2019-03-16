import * as firebase from 'firebase';
import ApiKeys from '../constants/ApiKeys';

import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(ApiKeys.FirebaseConfig);

export const moveFbRecord = (oldRef, newRef) => {
  const oldItemRef = firebase.database().ref(oldRef);
  const newItemRef = firebase.database().ref(newRef);
  oldItemRef.once('value', (snap) => {
    if (snap.val() === null) {
      return;
    }
    newItemRef.set(snap.val(), (error) => {
      if (!error) {
        oldItemRef.remove();
      } else if (typeof (console) !== 'undefined' && console.error) {
        console.error(error);
      }
    });
  });
};

export const copyFbRecord = (oldRef, newRef) => {
  const oldItemRef = firebase.database().ref(oldRef);
  const newItemRef = firebase.database().ref(newRef);
  oldItemRef.once('value', (snap) => {
    newItemRef.set(snap.val(), (error) => {
      if (error && typeof (console) !== 'undefined' && console.error) {
        console.error(error);
      }
    });
  });
};


export default firebase;
