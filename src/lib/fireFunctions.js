export const loguinGoogle = () => {
 const provider = new firebase.auth.GoogleAuthProvider()
 return firebase.auth().signInWithPopup(provider) 
}

export const register = (email, password ) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  
}

export const logOut = () => {
  firebase.auth().signOut()
  .then(()=>{
    console.log("salir")
  })
  .catch((error)=>{
    console.error(error)
  })
}
