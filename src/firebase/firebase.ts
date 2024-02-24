import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_BDqs7DQvKik9J3mLbRuYlpl-9-suIUM",
  authDomain: "auth-dev-6e02d.firebaseapp.com",
  projectId: "auth-dev-6e02d",
  storageBucket: "auth-dev-6e02d.appspot.com",
  messagingSenderId: "1056188577958",
  appId: "1:1056188577958:web:36fceb98aea5441f5d1c67",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
