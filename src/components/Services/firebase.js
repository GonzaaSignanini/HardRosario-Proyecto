import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC8t1J3w74EY6mL0RFcHcgteTp-ZzVgtwY",
    authDomain: "hardrosario-1bb1c.firebaseapp.com",
    projectId: "hardrosario-1bb1c",
    storageBucket: "hardrosario-1bb1c.appspot.com",
    messagingSenderId: "853723449050",
    appId: "1:853723449050:web:ce641e08350d02caca47e3"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)