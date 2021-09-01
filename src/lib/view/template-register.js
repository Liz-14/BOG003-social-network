import { loguinGoogle, emailPass } from '../index.js'

export const templateRegister = () => {
  const register = `
      <h2 class="background-title">Register</h2>
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
