import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: 'AIzaSyBiUCDyTgk8igwITCE12MNBgPcRX9vZR7c',
  authDomain: 'petbook-eb24e.firebaseapp.com',
  projectId: 'petbook-eb24e',
  storageBucket: 'petbook-eb24e.appspot.com',
  messagingSenderId: '354064182302',
  appId: '1:354064182302:web:03746ee8ebed465daf120f'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
