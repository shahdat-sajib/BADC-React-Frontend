import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_1jVjcmdkGq2fwqRWHdnSCHa6yBKZIM4",
    authDomain: "badc-phonebook.firebaseapp.com",
    projectId: "badc-phonebook",
    storageBucket: "badc-phonebook.appspot.com",
    messagingSenderId: "694160767262",
    appId: "1:694160767262:web:572df862f4814cc1bd710f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};