export const loguinGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      console.log('user', user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      console.log('email', email)
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      console.log('error', errorMessage)
      // ...
    })
}

export const register = (email, password, names) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user.updateProfile({
        displayName: names
      })

      const configuration = {
        url: 'http://localhost:5000/#/'
      }

      userCredential.user.sendEmailVerification(configuration)
        .catch(error => {
          const errorMessage = error.message
          alert(errorMessage)
        })
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      // location.hash = '#/Register'
      // alert(errorMessage)
      const fireError = document.getElementById('fire-error')
      fireError.textContent = errorMessage
      fireError.style.display = 'block'
      setTimeout(() => { fireError.style.display = 'none' }, 6000)
    })
}
