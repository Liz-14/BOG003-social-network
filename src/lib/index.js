// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!')
}

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
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      console.log('error', errorMessage)
    // ...
    })
}

export const emailPass = () => {
  const email = document.getElementsByClassName('input-register')[1].value
  const password = document.getElementsByClassName('input-register')[3].value

  register(email, password)
}

const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user
    // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    })
}
