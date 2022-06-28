import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUAuYEjrTSz04VBj2q7Tg77jVK0_YbsUM",
    authDomain: "fir-sample-d613c.firebaseapp.com",
    projectId: "fir-sample-d613c",
    storageBucket: "fir-sample-d613c.appspot.com",
    messagingSenderId: "112394693284",
    appId: "1:112394693284:web:9f3d5c5b81b1665d471431"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db