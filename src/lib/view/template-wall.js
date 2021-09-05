import { logOut } from '../firebase/fireFunctions.js'

export const templateWall = () => {
  const wall = `
  <header id = "mobile-header">
    <button type="button" class = "btn-logout" id="btn-logout-mobile"><a href="#/"><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>
    <a href="" id = "a-logo"><img src="img/Logo.png" alt="logo" id="logo-w"></a>
  </header>



  <nav id = "mobile-nav">
    <ul>
      <li> <button type="button" id="btn-home"> <a href="#"> <img src="img/home.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
      <li> <button type="button" id="btn-publish"> <a href="#"> <img src="img/publish.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
      <li> <button type="button" id="btn-perfil"> <a href="#"> <img src="img/perfil.png" alt="logo" class="img-btn-nav" id="img-perfil"> </a> </button> </li>
    </ul>
  </nav>

  <header id = "pc-header">
    <a href="#/" id = "a-logo"><img src="img/Logo.png" alt="logo" id="logo-w"></a>
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
  `

  const sectionW = document.createElement('section')
  sectionW.id = 'w-container'
  sectionW.innerHTML = wall

  // ----------------------  TEMPORALES ------------------------------------
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.querySelector('.v-log').textContent = `Toy logueado ${user.displayName}`
    } else {
      document.querySelector('.v-log').textContent = 'No toy logueado'
    }
  })

  const btnLogoutMobile = sectionW.querySelector('#btn-logout-mobile')
  btnLogoutMobile.addEventListener('click', () => {
    document.querySelector('#p-container').innerHTML = ''
    const initalSection = document.createElement('section')
    initalSection.id = 'initial-container'
    const sContainer = document.createElement('div')
    sContainer.id = 's-container'
    document.querySelector('#p-container').appendChild(initalSection)
    document.querySelector('#initial-container').appendChild(sContainer)
    // document.querySelector('#initial-container').style.display = 'block'
    logOut()
    location.hash = '#/'
  })

  const btnLogoutPC = sectionW.querySelector('#btn-logout-pc')
  btnLogoutPC.addEventListener('click', () => {
    document.querySelector('#p-container').innerHTML = ''
    const initalSection = document.createElement('section')
    initalSection.id = 'initial-container'
    const sContainer = document.createElement('div')
    sContainer.id = 's-container'
    document.querySelector('#p-container').appendChild(initalSection)
    document.querySelector('#initial-container').appendChild(sContainer)
    // document.querySelector('#initial-container').style.display = 'block'
    logOut()
    location.hash = '#/'
  })
  // ----------------------------------------------------------------------------
  return sectionW
}
