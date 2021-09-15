import { templateRegister } from './view/template-register.js'
import { templateHome } from './view/template-home.js'
import { templateLogin } from './view/template-login.js'
import { templateWall } from './view/template-wall.js'
import { modalNamePet } from './view/name-pet.js'

// al recargar la pagina cambia el hash
location.hash = '#/'
const initialContainer = document.getElementById('initial-container')
const wallContainer = document.getElementById('w-section')
initialContainer.appendChild(templateHome())

export const router = (hash) => {
  initialContainer.innerHTML = ''
  switch (hash) {
    case '#/':
      wallContainer.innerHTML = ''
      wallContainer.style.display = 'none'
      initialContainer.appendChild(templateHome())
      break

    case '#/Login':
      return initialContainer.appendChild(templateLogin())

    case '#/Register':
      return initialContainer.appendChild(templateRegister())

    case '#/Wall':
      document.querySelector('#w-section').style.display = 'block'
      initialContainer.style.display = 'none'
      wallContainer.appendChild(templateWall())
      break

    case '#/pet':
      document.querySelector('#w-section').style.display = 'block'
      initialContainer.style.display = 'none'
      wallContainer.appendChild(modalNamePet())
      break

    default:
      return console.log('error 404')
  }
}
