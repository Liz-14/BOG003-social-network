import { loguinGoogle, register } from '../fireFunctions.js'

export const templateRegister = () => {
  const register = `
      <h2 class="background-title">Register</h2>
      <input type="text" class="input-register" placeholder="name">
      <input type="email" class="input-register" placeholder="email">
      <input type="email" class="input-register" placeholder="check email">
      <input type="password" class="input-register" placeholder="password" id = "password">
      <input type="password" class="input-register" placeholder="check password">
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
  divSection.innerHTML = register

  // ----- CONTROL DE ERRORES ----- //
  const emailPass = () => {
    const errorP = divSection.querySelector('#error-p')
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
  btnG.addEventListener('click', () => { loguinGoogle() })

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
