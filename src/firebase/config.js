
import { initializeApp } from "firebase/app";


const firebaseConfig = {

  apiKey: "AIzaSyB8vhKxdkFoYJwrX6Qxt3IOt-T32hERCn4",

  authDomain: "franco-db.firebaseapp.com",

  projectId: "franco-db",

  storageBucket: "franco-db.firebasestorage.app",

  messagingSenderId: "652287797191",

  appId: "1:652287797191:web:1820a9dbc056a98aad9be2"

};


// Initialize Firebase


export const app = initializeApp(firebaseConfig);