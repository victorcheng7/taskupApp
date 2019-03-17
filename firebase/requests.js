import firebase, { moveFbRecord, copyFbRecord } from './firebaseInit';

export const getRequestIDs = uid => firebase.database().ref(`taskers/${uid}/requests`).once('value').then(requestIDs => requestIDs.val());

export const setRequestSeen = (requestID, uid) => {
  let timestamp = new Date();
  timestamp = Math.floor(timestamp.getTime() / 1000);
  firebase.database().ref(`requests/${requestID}/seen/${uid}`).set(timestamp);
};

export const getRequest = (requestID) => {
  firebase.database().ref(`requests/${requestID}/`).once('value').then(request => request.val());
};

export const confirmRequest = (requestID, uid) => {
  firebase.database().ref(`requests/${requestID}/tasker/${uid}`).set(uid);
};

export default () => {};
