export const templateLogin = () => {
  const login = `
    <h2>Coming Soon</h2>
    <button type="button" class="btn-p"> <a href="#/Register">Register</a></button>`

  const divLogin = document.createElement('div')
  divLogin.id = 'c-container'
  divLogin.innerHTML = login

  return divLogin
}
