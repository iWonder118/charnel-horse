import { initializeApp, getApps } from 'firebase/app';
import { getPerformance } from "firebase/performance";

// 必要な機能をインポート
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain:  process.env.AUTH_DOMAIIN,
  projectId:  process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

let app;

if (!getApps()?.length) {
  // Firebaseアプリの初期化
  app = initializeApp(firebaseConfig);
}

// 他ファイルで使うために機能をエクスポート
export const analytics = getAnalytics();
export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const funcions = getFunctions();
export const perf = getPerformance(app);