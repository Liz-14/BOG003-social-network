import { logOut } from '../fireFunctions.js'

export const templateWall = () => {
  const wall = `
  <header>
    <button type="button" id="btn-logout"><a href="#/"><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>
    <a href="#/" id = "a-logo"><img src="img/Logo.png" alt="logo" id="logo-w"></a>
  </header>

  <nav>
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

  const btnLogout = sectionW.querySelector('#btn-logout')
  btnLogout.addEventListener('click', () => {
    sectionW.style.display = 'none'
    document.querySelector('#initial-container').style.display = 'block'
    logOut()
  })

  return sectionW
}
