import firebase from 'firebase';

/*

  Here we are initializing the Firebase app with the credentials
  we're grabbing from the environment variables.

 */
const app = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: `${process.env.VUE_APP_FB_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_FB_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_ID,
  appId: process.env.VUE_APP_FB_APP_ID
})

export const auth = app.auth();
export const db = app.firestore();