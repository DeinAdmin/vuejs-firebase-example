import firebase from 'firebase';

/*
const app = firebase.initializeApp({
  apiKey: "api-key",
  authDomain: "auth.domain.com",
  projectId: "project-id",
  storageBucket: "storage-bucket",
  messagingSenderId: "messaging-sender-id",
  appId: "app-id"
})
*/

const app = firebase.initializeApp({
  apiKey: "AIzaSyDCzfVyiQaqU98P0RVuyesiXLD6pjAHUdc",
  authDomain: "vuejs-firebase-example-cf900.firebaseapp.com",
  projectId: "vuejs-firebase-example-cf900",
  storageBucket: "vuejs-firebase-example-cf900.appspot.com",
  messagingSenderId: "662456565078",
  appId: "1:662456565078:web:d74d8c22c74fcaaafd2af7"
})

export const auth = app.auth();
export const db = app.firestore();