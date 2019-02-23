import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCS_aIKKGlNf6xskhv1YZuPSS41wu8wZm4',
  authDomain: 'game2-fd4c5.firebaseapp.com',
  databaseURL: 'https://game2-fd4c5.firebaseio.com',
  projectId: 'game2-fd4c5',
  storageBucket: 'game2-fd4c5.appspot.com',
  messagingSenderId: '930880815118'
};
firebase.initializeApp(config);

export default firebase;
