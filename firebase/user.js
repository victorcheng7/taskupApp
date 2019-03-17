import firebase from './firebaseInit';

export const getUserFB = uid => firebase.database().ref(`users/${uid}/fb`).once('value').then(snapshot => snapshot.val());

export const getUserProvider = uid => firebase.database().ref(`users/${uid}/provider`).once('value').then(snapshot => snapshot.val());

export const getUserProfile = async uid => firebase.database().ref(`users/${uid}/profile`).once('value').then(snapshot => snapshot.val());

export const getUserPicture = uid => firebase.database().ref(`users/${uid}/profile/picture`).once('value').then(snapshot => snapshot.val());

export const getUserName = uid => firebase.database().ref(`users/${uid}/profile/name`).once('value').then(snapshot => snapshot.val());
