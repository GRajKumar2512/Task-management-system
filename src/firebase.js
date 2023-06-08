import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  // Replace with your Firebase project's config
  apiKey: "AIzaSyCyibasiF-QVS-ufykogKyPnBum8U42L-s",
  authDomain: "localhost",
  projectId: "task-management-system-9f08c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
