export const templateHome = () => {
  const home = `
  <h2>WELCOME</h2>
  <button type="button" class="btn-p"> <a href="#/Loguin">Loguin</a></button>
  <button type="button" class="btn-p"> <a href="#/Register">Register</a></button>`

  const divHome = document.createElement('div')
  divHome.id = 'c-container'
  divHome.innerHTML = home

  return divHome
}
