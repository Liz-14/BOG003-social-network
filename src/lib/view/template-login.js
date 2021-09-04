import { login, loginGoogle } from '../firebase/fireFunctions.js'

export const templateLogin = () => {
  const loginT = `
      <h2 class="background-title">Login</h2>
      <input type="email" class="input-register" placeholder="email">
      <input type="password" class="input-register" placeholder="password" id = "password">
      <p id="fire-error" class="error"></p>
      <button type="button" id="btn-signup" class="btn-p"><a href="">Sign In</a></button>
      <button type="button" class="btn-p" id="btn-g">
        <img src="img/logo_google.png" alt="" id="logo-google">
        <a href="">Sign In</a>
      </button>
      <button type="button" class="btn-s"> <a href="#/Register">Register</a></button>`

  const divLogin = document.createElement('div')
  divLogin.id = 'c-container'
  divLogin.innerHTML = loginT

  const signIn = () => {
    const email = divLogin.getElementsByClassName('input-register')[0].value
    const pass = divLogin.getElementsByClassName('input-register')[1].value

    login(email, pass)
      .then((userCredential) => {
        location.hash = '#/Wall'
        const user = userCredential.user
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const fireError = document.getElementById('fire-error')
        fireError.textContent = errorMessage
        fireError.style.display = 'block'
        setTimeout(() => { fireError.style.display = 'none' }, 6000)
      })
  }

  divLogin.querySelector('#btn-signup').addEventListener('click', (e) => {
    e.preventDefault()
    signIn()
  })

  const btnG = divLogin.querySelector('#btn-g')
  btnG.addEventListener('click', (e) => {
    e.preventDefault()
    loginGoogle()
      .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log('user', user)
        location.hash = '#/Wall'
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

        const fireError = document.getElementById('fire-error')
        fireError.textContent = errorMessage
        fireError.style.display = 'block'
        setTimeout(() => { fireError.style.display = 'none' }, 6000)
      // ...
      })
  })

  return divLogin
}
