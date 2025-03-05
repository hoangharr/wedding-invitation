import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDOuaBrONS142Oml6qW6PqYzycXNX1L0Is',
  authDomain: 'wedding-fe3b1.firebaseapp.com',
  projectId: 'wedding-fe3b1',
  storageBucket: 'wedding-fe3b1.firebasestorage.app',
  messagingSenderId: '997529710724',
  appId: '1:997529710724:web:d258ede2e76d2fb56252d1',
  measurementId: 'G-04V1KQ9MQ4',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
