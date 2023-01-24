import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCzsNACCcCzvRGiitERoWJb0nOeR5BdBd4",
  authDomain: "vue-blog-correct-system.firebaseapp.com",
  projectId: "vue-blog-correct-system",
  storageBucket: "vue-blog-correct-system.appspot.com",
  messagingSenderId: "617269731102",
  appId: "1:617269731102:web:2298a12654f4b07d14b30f"
};

  //init firebase
  firebase.initializeApp(firebaseConfig);

  // database setup
  let db = firebase.firestore();

  export {db};

