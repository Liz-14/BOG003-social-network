//import {templateWall} from './template-wall.js'

export const modalNamePet = () => {

    //let modalDiv = document.getElementById("w-section")
    //const userEmail = user.email
    const sectionPetName = document.createElement('section')
    sectionPetName.id = 'section-pet-name'
  
    //console.log('user', user.additionalUserInfo.isNewUser)
    const divPetName = document.createElement('div')
    divPetName.id = 'div-pet-name'
    sectionPetName.appendChild(divPetName)
    const petName = document.createElement('input')
    petName.type = 'text'
    petName.placeholder = 'put the name of your pet'
    petName.id = 'pet-input'
    petName.className = 'input-register'
    divPetName.appendChild(petName)
    const btnPetName = document.createElement('button')
    btnPetName.id = 'btn-pet-name'
    btnPetName.textContent = 'Enviar'
    btnPetName.className = 'btn-p'
    divPetName.appendChild(btnPetName)
  
    btnPetName.addEventListener('click', () => {
      const valuePetName = document.getElementById('pet-input').value
      const changeUser = firebase.auth().currentUser
      location.hash = '#/Wall'
  
      changeUser.updateProfile({
        displayName: valuePetName
      }).then(() => {
        console.log(valuePetName)
        document.querySelector('.v-log').textContent = `Bienvenid@ ${valuePetName}`
      }).catch((error) => {
        console.error(error.message)
      })
    })
  
    return sectionPetName
  
  }