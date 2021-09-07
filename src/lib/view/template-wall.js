import { logOut } from '../firebase/fireFunctions.js'
//import firebase from 'firebase'

export const templateWall = () => {
  const wall = `
  <header id = "mobile-header">
    <button type="button" class = "btn-logout" id="btn-logout-mobile"><a href="#/"><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>
    <img src="img/Logo.png" alt="logo" id="logo-w">
  </header>

  <nav id = "mobile-nav">
    <ul>
      <li> <button type="button" id="btn-home"> <a href="#"> <img src="img/home.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
      <li> <button type="button" id="btn-publish"> <a href="#"> <img src="img/publish.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
      <li> <button type="button" id="btn-perfil"> <a href="#"> <img src="img/perfil.png" alt="logo" class="img-btn-nav" id="img-perfil"> </a> </button> </li>
    </ul>
  </nav>


  <header id = "pc-header">
    <img src="img/Logo.png" alt="logo" id="logo-w">
    <button type="button" class = "btn-logout" id="btn-logout-pc"><a href=""><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>

    <nav id = "pc-nav">
      <ul>
        <li> <button type="button" id="btn-home-pc"> <a href="#"> <img src="img/home.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
        <li> <button type="button" id="btn-publish-pc"> <a href="#"> <img src="img/publish.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
        <li> <button type="button" id="btn-perfil-pc"> <a href="#"> <img src="img/perfil.png" alt="logo" class="img-btn-nav" id="img-perfil"> </a> </button> </li>
      </ul>
    </nav>
  </header>

  <h2 class = "v-log"></h2>

  <section id ="posts">
  <div class="container-posts">
    <h2 id = "pet-name" class = "user-name-post"></h2>
    <p class = "user-text-post"></p>
    <ul>
        <li> <button type="button" id="btn-like"> <a href="#"> <img src="img/like.png" alt="logo" class="img-btn-wall"> </a> </button> </li>
        <li> <button type="button" id="btn-delete"> <a href="#"> <img src="img/delete.png" alt="logo" class="img-btn-wall"> </a> </button> </li>
    </ul>
  </div>
  </section>
  `
  //<h2 class = "user-name-post"></h2>
  //<p class = "user-text-post"></p>
  const divW = document.createElement('div')
  divW.id = 'w-container'
  divW.innerHTML = wall

  // ----------------------  TEMPORALES ------------------------------------


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userEmail = user.email
      if (userEmail.includes("gmail")) {
        const divPetName = document.createElement("div")
        divPetName.id = "div-pet-name"
        divW.appendChild(divPetName)
        const petName = document.createElement("input")
        petName.type = "text"
        petName.placeholder = "Pet Name"
        petName.id = "pet-input"
        divPetName.appendChild(petName)
        const btnPetName = document.createElement("button")
        btnPetName.id = "btn-pet-name"
        btnPetName.textContent = "enviar"
        divPetName.appendChild(btnPetName)

        document.getElementById("btn-pet-name").addEventListener("click", () => {

          const valuePetName = document.getElementById("pet-input").value
          const changeUser = firebase.auth().currentUser;
          document.getElementById("w-container").removeChild(document.getElementById("div-pet-name"))

          changeUser.updateProfile({
            displayName: valuePetName,
          }).then(() => {
            document.querySelector('.v-log').textContent = `${user.displayName}`
            // Update successful
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

        })
      }
      document.querySelector('.user-name-post').textContent = `${user.displayName}`
      //document.querySelector('.v-log').textContent = `${user.displayName}`
    } else {
      document.querySelector('.user-name-post').textContent = 'No toy logueado'
    }
  })





  const btnLogoutMobile = divW.querySelector('#btn-logout-mobile')
  btnLogoutMobile.addEventListener('click', () => {
    document.querySelector('#initial-container').style.display = 'block'
    logOut()
    location.hash = '#/'
  })

  const btnLogoutPC = divW.querySelector('#btn-logout-pc')
  btnLogoutPC.addEventListener('click', () => {
    document.querySelector('#initial-container').style.display = 'block'
    logOut()
    location.hash = '#/'
  })
  // ----------------------------------------------------------------------------
  return divW
}
