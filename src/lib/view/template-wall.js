import { logOut } from '../fireFunctions.js'

export const templateWall = () => {
  const wall = `
  <header>
    <button type="button" id="btn-logout"><a href="#/"><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>
    <a href="#/" id = "a-logo"><img src="img/Logo.png" alt="logo" id="logo-w"></a>`

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
