import firebase from './firebaseInit';
import { getUserProfile } from './user';
import { getRequestIDs } from './requests';


export const isApplier = uid => firebase.database().ref(`appliers/ids/${uid}`).once('value').then(applier => applier.val() !== null);
export const isTasker = uid => firebase.database().ref(`taskers/ids/${uid}`).once('value').then(tasker => tasker.val() !== null);

export const getTasker = (uid, callback) => {
  firebase.database().ref(`taskers/${uid}`).on('value', async (taskerSnapShot) => {
    const tasker = taskerSnapShot.val();
    const profile = await getUserProfile(uid);
    tasker.profile = profile;
    tasker.profile.uid = uid;
    tasker.requests = await getRequestIDs(uid);
    callback(tasker);
  });
};

export const setAvailability = (categoryID, subCategoryID, available, uid) => {
  firebase.database().ref(`taskers/${uid}/categories/${categoryID}/${subCategoryID}/available`).set(available);
};

export const setAvailabilities = (categories, uid) => {
  Object.keys(categories).forEach((categoryID) => {
    Object.keys(categories[categoryID].sub_category_ids).forEach((subCategoryID) => {
      setAvailability(categoryID, subCategoryID, categories.get(categoryID).get(subCategoryID).get('available'), uid);
    });
  });
};
