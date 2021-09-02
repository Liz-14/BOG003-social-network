import { logOut, loguinGoogle, register } from '../fireFunctions.js'

export const templateRegister = () => {
  const registerT = `
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
        <a href="#/">Sign Up</a>
      </button>
      <button type="button" class="btn-s"> <a href="#/Loguin">Loguin</a></button>`

  const divSection = document.createElement('div')
  divSection.id = 'c-container'
  divSection.innerHTML = registerT

  // ----- CONTROL DE ERRORES ----- //
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
      errorP.textContent = 'Hay campos vacios'
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
            }).then(()=>{
      
              const configuration = {
                url: 'http://localhost:5000/#/'
              }
              userCredential.user.sendEmailVerification(configuration)
            })
          })
          .then(()=>{
            logOut()
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
        } else {
          if (email1 !== email2) {
            errorP.style.display = 'block'
            errorP.textContent = 'El email y su confirmacion deben coincidir'
            setTimeout(() => { errorP.style.display = 'none' }, 4500)
          }
          if (password1 !== password2) {
            errorP.textContent = 'La contraseña y su confirmacion deben coincidir'
            errorP.style.display = 'block'
            setTimeout(() => { errorP.style.display = 'none' }, 4500)
          }
        }
        // condiciones de la contraseña no se cumplen
      } else {
        errorP.textContent = 'Contraseña incorrecta'
        errorP.style.display = 'block'
        setTimeout(() => { errorP.style.display = 'none' }, 3500)
      }
    }
  }

  // -------  EVENTOS ------- //

  const btnG = divSection.querySelector('#btn-g')
  btnG.addEventListener('click', () => { 
    loguinGoogle() 
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
  
  })

  const btnSingUp = divSection.querySelector('#btn-signup')
  btnSingUp.addEventListener('click', (e) => {
    //location.hash = "#/"
    // cancela evento que viene por defecto
    e.preventDefault()
    emailPass()
    document.getElementById("verification-email").style.display = "block"

  })

  const inputPass = divSection.querySelector('#password')
  inputPass.addEventListener('click', () => {
    document.getElementById('rules').style.display = 'block'
    setTimeout(() => { document.getElementById('rules').style.display = 'none' }, 12000)
  })

  return divSection
}
