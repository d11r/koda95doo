import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  DocumentData,
  QuerySnapshot,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const APPLICATIONS_DB_NAME = 'job_applications';

const post = async (submissionData: any) => {
  try {
    await addDoc(collection(firestore, APPLICATIONS_DB_NAME), submissionData);
    return true;
  } catch (e: any) {
    return false;
  }
};

const getCollections = async () => {
  try {
    return await getDocs(collection(firestore, APPLICATIONS_DB_NAME));
  } catch (e: any) {
    return null;
  }
};

const getSubmissionCount = (
  docsSnapshot: QuerySnapshot<DocumentData> | null
) => {
  try {
    if (docsSnapshot != null) return docsSnapshot.size;
    return 0;
  } catch (e: any) {
    return 0;
  }
};

export { firestore, post, getSubmissionCount, getCollections };
