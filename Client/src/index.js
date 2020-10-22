import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const admin = require('./node_modules/firebase-admin');
// const serviceAccount = require("./serviceAccountKey.json");
// const data = require("../../Server/data.json");
// const collectionKey = "Locations"; //name of the collection
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://wheresthespot-f83b8.firebaseio.com"
// });
// const firestore = admin.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);
// if (data && (typeof data === "object")) {
// Object.keys(data).forEach(docKey => {
//  firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
//     console.log("Document " + docKey + " successfully written!");
// }).catch((error) => {
//    console.error("Error writing document: ", error);
// });
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
