import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const APPLICATIONS_DB_NAME = 'job_applications';

const firestore = getFirestore();

const post = async (submissionData: any) => {
  try {
    const docRef = await addDoc(
      collection(firestore, APPLICATIONS_DB_NAME),
      submissionData
    );
    // TODO: check docRef to see if successful
    console.log('document written', docRef.id);
  } catch (e: any) {
    // TODO: if error, consult user to try again
    console.error('error adding doc', e);
  }
};

export { firestore, post };
