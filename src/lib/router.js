import { templateRegister } from './view/template-register.js'
import { templateHome } from './view/template-home.js'
import { emailPass, register } from './index.js'
import { templateLogin } from './view/template-loguin.js'

console.log(templateRegister())
console.log(templateHome())

document.getElementById('s-container').appendChild(templateHome())
const sectionContainer = document.getElementById('s-container')

export const router = (hash) => {
  sectionContainer.innerHTML = ''
  switch (hash) {
    case '#/':
      sectionContainer.appendChild(templateHome())
      break

    case '#/Loguin':
      sectionContainer.appendChild(templateLogin())
      break

    case '#/Register':
      sectionContainer.appendChild(templateRegister())
      const btnSingUp = document.querySelector("#btn-signup")
      btnSingUp.addEventListener("click", emailPass)
      console.log(emailPass().email)
      break

    default:
      return console.log('error 404')
  }
}
