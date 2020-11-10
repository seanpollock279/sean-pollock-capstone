import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAG0Ky5RxBOydNNoRgpqpnbTFn-BFSBoQ4",
    authDomain: "auth-wheresthespot.firebaseapp.com",
    databaseURL: "https://auth-wheresthespot.firebaseio.com",
    projectId: "auth-wheresthespot",
    storageBucket: "auth-wheresthespot.appspot.com",
    messagingSenderId: "16917979988",
    appId: "1:16917979988:web:c3ce4af8ce9a1807a81ec1"
})

export const auth = app.auth();
export default app;