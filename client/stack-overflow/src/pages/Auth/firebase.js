import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyBb6jlhL8jO995W0ULIj2inbjY6Qj3WDmI",
    authDomain: "stack-overflow-ee6d6.firebaseapp.com",
    projectId: "stack-overflow-ee6d6",
    storageBucket: "stack-overflow-ee6d6.appspot.com",
    messagingSenderId: "333993753218",
    appId: "1:333993753218:web:9b68b537810c93eba8529b",
    measurementId: "G-XZ1ECETQ70"
};
    
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};