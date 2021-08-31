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
      console.log("email", email)
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      console.log('error', errorMessage)
      // ...
    })
}

export const emailPass = () => {
  const email1 = document.getElementsByClassName('input-register')[0].value
  const password1 = document.getElementsByClassName('input-register')[2].value
  const email2 = document.getElementsByClassName("input-register")[1].value
  const password2 = document.getElementsByClassName("input-register")[3].value

  if (email1 === email2 && password1 === password2){ 
  }else{
    alert("Este campo debe ser igual al anterior")
  }
  
  register(email1, password1)
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
      //location.hash = '#/Register'
      console.log("hola!")
      alert(errorMessage)
      //document.getElementById("error").textContent=errorMessage

    })
}
