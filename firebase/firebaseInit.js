import * as firebase from 'firebase';
import { Facebook } from 'expo';
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

export const moveFbRecordWithPush = async (oldRef, newRef) => {
  const oldItemRef = firebase.database().ref(oldRef);
  const newItemRef = firebase.database().ref(newRef);
  const sucess = await oldItemRef.once('value').then(async (snap) => {
    if (snap.val() === null) {
      return true;
    }
    const done = await newItemRef.push(snap.val()).then(async (error) => {
      if (!error) {
        oldItemRef.remove();
      } else if (typeof (console) !== 'undefined' && console.error) {
        console.error(error);
        return false;
      }
      return true;
    });
    return done;
  });
  return sucess;
};


export const loginWithFacebook = async () => {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('254638235448042');

  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }
};

export const loginWithFirebase = async (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
  console.log('Logged in');
};

export default firebase;
