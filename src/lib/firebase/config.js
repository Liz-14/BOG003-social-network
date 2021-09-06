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

/* firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const displayName = user.displayName
      const uid = user.uid
      const email = user.email
      const emailVerified = user.emailVerified
      const photoURL = user.photoURL
      const providerData = user.poviderdata
    } else {
    }
}) */
