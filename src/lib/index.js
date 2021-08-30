// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!')
}

export const loguinGoogle = () => {

 const provider = new firebase.auth.GoogleAuthProvider();
 firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("user", user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("error", errorMessage)
    // ...
  });
}

 export const emailPass = () =>{
  const email = document.getElementsByClassName("input-register")[1].value;
  const password = document.getElementsByClassName("input-register")[3].value;
  return {email,password}
}

export const register = () => {

  firebase.auth().createUserWithEmailAndPassword(emailPass.email, emailPass.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });

}
