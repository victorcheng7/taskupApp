import firebase, { moveFbRecord, moveFbRecordWithPush } from './firebaseInit';
import { getUserProfile } from './user';
import { getRequestIDs } from './requests';


export const isApplier = uid => firebase.database().ref(`appliers/ids/${uid}`).once('value').then(applier => applier.val() !== null);
export const isTasker = uid => firebase.database().ref(`taskers/ids/${uid}`).once('value').then(tasker => tasker.val() !== null);

export const getTasker = (uid, callback) => {
  firebase.database().ref(`taskers/${uid}`).on('value', async (taskerSnapshot) => {
    const tasker = taskerSnapshot.val();
    const { categories } = tasker;

    const profile = await getUserProfile(uid);
    tasker.profile = profile;
    tasker.profile.uid = uid;
    tasker.requests = await getRequestIDs(uid);
    callback(tasker);
  });
};

export const taskerAvailabiltyListen = (uid, callback) => {
  firebase.database().ref(`taskers/${uid}/tasker_profile/available`).on('value', async (available) => {
    callback(available);
  });
};

export const setTaskerAvailabilty = (uid, available) => firebase.database().ref(`taskers/${uid}/tasker_profile/available`).set(available);


export const setAvailability = (categoryID, subCategoryID, available, uid) => {
  firebase.database().ref(`taskers/${uid}/categories/${categoryID}/${subCategoryID}/available`).set(available);
};

export const setAllAvailabilities = (categories, available, uid) => {
  Object.keys(categories.category_ids).forEach((categoryID) => {
    Object.keys(categories[categoryID].sub_category_ids).forEach((subCategoryID) => {
      setAvailability(categoryID, subCategoryID, available, uid);
    });
  });
};

export const setStatus = async (categoryID, subCategoryID, msg, uid) => {
  await moveFbRecordWithPush(`taskers/${uid}/categories/${categoryID}/${subCategoryID}/status`, `statuses/${uid}/categories/${categoryID}/${subCategoryID}/statuses`);
  const status = {
    msg,
    timestamp: Date.now(),
  };
  firebase.database().ref(`taskers/${uid}/categories/${categoryID}/${subCategoryID}/status`).set(status);
};
