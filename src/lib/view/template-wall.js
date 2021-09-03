export const templateWall = () => {
  const wall = `
      <h2 class="background-title">Login</h2>
      <input type="email" class="input-register" placeholder="email">
      <input type="password" class="input-register" placeholder="password" id = "password">
      <p id="fire-error" class="error"></p>
      <button type="button" id="btn-signup" class="btn-p"><a href="#/">Sign In</a></button>
      <button type="button" class="btn-p" id="btn-g">
        <img src="img/logo_google.png" alt="" id="logo-google">
        <a href="#/">Sign In</a>
      </button>
      <button type="button" class="btn-s"> <a href="#/Register">Register</a></button>`

  const sectionW = document.createElement('section')
  sectionW.id = 'w-container'
  sectionW.innerHTML = wall

  return sectionW
}
