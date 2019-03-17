import firebase, { moveFbRecord, copyFbRecord } from './firebaseInit';

export const getRequestIDs = uid => firebase.database().ref(`taskers/${uid}/requests`).once('value').then(requestIDs => requestIDs.val());

export const setRequestSeen = (requestID, uid) => {
  let timestamp = new Date();
  timestamp = Math.floor(timestamp.getTime() / 1000);
  firebase.database().ref(`requests/${requestID}/seen/${uid}`).set(timestamp);
};

export const getRequest = (requestID) => {
  firebase.database().ref(`requests/${requestID}`).once('value').then(request => request.val());
};

export const isRequestTaken = (requestID) => {
  firebase.database().ref(`requests/${requestID}/tasker`).once('value').then(requestTasker => requestTasker.val() !== null);
};

export const confirmRequest = async (requestID, uid) => {
  let timestamp = new Date();
  timestamp = Math.floor(timestamp.getTime() / 1000);
  const requestTaken = await isRequestTaken(requestID);
  if (!requestTaken) {
    firebase.database().ref(`requests/${requestID}/tasker/${uid}`).set(timestamp);
  }
};

export const rejectRequest = (requestID, uid) => {
  firebase.database().ref(`taskers/${uid}/requests/${requestID}`).set(null);
};

export default () => {};
