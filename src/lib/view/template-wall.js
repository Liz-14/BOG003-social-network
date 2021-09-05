import { logOut } from '../firebase/fireFunctions.js'

export const templateWall = () => {
  const wall = `
  <header id = "mobile-header">
    <button type="button" id="btn-logout"><a href="#/"><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>
    <a href="#/" id = "a-logo"><img src="img/Logo.png" alt="logo" id="logo-w"></a>
  </header>

  <h2 id="log-verification"></h2>

  <nav id = "mobile-nav">
    <ul>
      <li> <button type="button" id="btn-home"> <a href="#"> <img src="img/home.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
      <li> <button type="button" id="btn-publish"> <a href="#"> <img src="img/publish.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
      <li> <button type="button" id="btn-perfil"> <a href="#"> <img src="img/perfil.png" alt="logo" class="img-btn-nav" id="img-perfil"> </a> </button> </li>
    </ul>
  </nav>
  `

  const sectionW = document.createElement('section')
  sectionW.id = 'w-container'
  sectionW.innerHTML = wall

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const displayName = user.displayName
      const uid = user.uid
      sectionW.querySelector('#log-verification').textContent = 'Toy logeado ' + displayName
    } else {
      sectionW.querySelector('#log-verification').textContent = 'No toy logeado'
    }
  })

  const btnLogout = sectionW.querySelector('#btn-logout')
  btnLogout.addEventListener('click', () => {
    sectionW.style.display = 'none'
    document.querySelector('#initial-container').style.display = 'block'
    logOut()
  })

  return sectionW
}
