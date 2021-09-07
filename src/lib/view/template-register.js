import { logOut, loginGoogle, register } from '../firebase/fireFunctions.js'
import firebase from 'firebase'

export const templateRegister = () => {
  const registerT = `
    <header>
      <img src="img/MobileRabbit.png" alt="rabbit" id="img-rabbit">
      <a href="#/"><img src="img/Logo.png" alt="logo" id="logo"></a>
    </header>
    <h2 class="background-title">Register</h2>
    <input type="text" id = "user-name" class="input-register" placeholder="name">
    <input type="email" class="input-register" placeholder="email">
    <input type="email" class="input-register" placeholder="check email">
    <input type="password" class="input-register" placeholder="password" id = "password">
    <input type="password" class="input-register" placeholder="check password">
    <p id="verification-email">Revisa tu correo para ingresar</p>
    <p id="fire-error" class="error"></p>
    <p id="error-p" class="error"></p>
    <p id="rules">La contraseña debe tener entre 6 y 16 caracteres, al menos
    un dígito, una minúscula y una mayúscula. Puede tener otros símbolos.</p>
    <button type="button" id="btn-signup" class="btn-p"><a href="#/">Sign Up</a></button>
    <button type="button" class="btn-p" id="btn-g">
      <img src="img/logo_google.png" alt="" id="logo-google">
      <a href="">Sign Up</a>
    </button>
    <button type="button" class="btn-s"> <a href="#/Login">login</a></button>`

  const divSection = document.createElement('div')
  divSection.id = 'c-container'
  divSection.innerHTML = registerT

  // ------------------------ CONTROL DE ERRORES ------------------------- //
  const emailPass = () => {
    const errorP = divSection.querySelector('#error-p')
    const name = divSection.querySelector('#user-name').value
    const email1 = divSection.getElementsByClassName('input-register')[1].value
    const password1 = divSection.getElementsByClassName('input-register')[3].value
    const email2 = divSection.getElementsByClassName('input-register')[2].value
    const password2 = divSection.getElementsByClassName('input-register')[4].value
    const passRules = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/.test(password1)

    // Verificacion campos vacios
    if (email1 === '' || email2 === '' || password1 === '' || password2 === '') {
      errorP.style.display = 'block'
      errorP.textContent = 'Complete the empty fields. '
      setTimeout(() => { errorP.style.display = 'none' }, 3500)
    } else {
      // Control de condiciones de la contraseña
      if (passRules) {
        // Verificacion igualdad en la informacion de los input email-password
        if (email1 === email2 && password1 === password2) {
          register(email1, password1)
            .then((userCredential) => {
            // Signed in
              userCredential.user.updateProfile({
                displayName: name
              }).then(() => {
                const configuration = {
                  url: 'http://localhost:5000/#/'
                }
                userCredential.user.sendEmailVerification(configuration)
              })
            })
            .then(() => {
              logOut()
            })
            .then(() => {
              document.getElementById('verification-email').style.display = 'block'
              setTimeout(() => { location.hash = '#/' }, 5000)
            })
            .catch((error) => {
              const errorCode = error.code
              const errorMessage = error.message

              const fireError = document.getElementById('fire-error')
              fireError.textContent = errorMessage
              fireError.style.display = 'block'
              setTimeout(() => { fireError.style.display = 'none' }, 6000)
            })
        } else {
          if (email1 !== email2) {
            errorP.style.display = 'block'
            errorP.textContent = 'The email fields must match'
            setTimeout(() => { errorP.style.display = 'none' }, 4500)
          }
          if (password1 !== password2) {
            errorP.textContent = ' The password fields must match'
            errorP.style.display = 'block'
            setTimeout(() => { errorP.style.display = 'none' }, 4500)
          }
        }
        // condiciones de la contraseña no se cumplen
      } else {
        errorP.textContent = 'Invalid password'
        errorP.style.display = 'block'
        setTimeout(() => { errorP.style.display = 'none' }, 3500)
      }
    }
  }

  // -------  EVENTOS ------- //

  const btnG = divSection.querySelector('#btn-g')
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

  const btnSingUp = divSection.querySelector('#btn-signup')
  btnSingUp.addEventListener('click', (e) => {
    // cancela evento que viene por defecto
    e.preventDefault()
    emailPass()
  })

  const inputPass = divSection.querySelector('#password')
  inputPass.addEventListener('click', () => {
    document.getElementById('rules').style.display = 'block'
    setTimeout(() => { document.getElementById('rules').style.display = 'none' }, 12000)
  })

  return divSection
}
