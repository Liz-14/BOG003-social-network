import { templateRegister } from './view/template-register.js'
import { templateHome } from './view/template-home.js'

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
      console.log('Loguin')
      break

    case '#/Register':
      return sectionContainer.appendChild(templateRegister())

    default:
      return console.log('error 404')
  }
}
