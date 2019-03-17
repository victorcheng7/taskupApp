import firebase from './firebaseInit';
import { getUserProfile } from './user';


export const isTasker = uid => firebase.database().ref(`taskers/ids/${uid}`).once('value').then(tasker => tasker.val() !== null);


export const getTasker = (uid, callback) => {
  firebase.database().ref(`taskers/${uid}`).on('value', async (taskerSnapShot) => {
    const tasker = taskerSnapShot.val();
    const profile = await getUserProfile(uid);
    tasker.profile = profile;
    tasker.profile.uid = uid;
    callback(tasker);
  });
};

// export default getTasker;
