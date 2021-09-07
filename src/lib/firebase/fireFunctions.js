
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export const register = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const logOut = () => {
  return firebase.auth().signOut()
}