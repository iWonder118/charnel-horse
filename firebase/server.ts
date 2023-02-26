import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_SERVICE_ACCOUNT_KEY = require("../env/FIREBASE_SERVICE_ACCOUNT_KEY.json")

if (!getApps()?.length) {
  initializeApp({
    credential: cert(FIREBASE_SERVICE_ACCOUNT_KEY),
  });
}

export const adminDB = getFirestore();