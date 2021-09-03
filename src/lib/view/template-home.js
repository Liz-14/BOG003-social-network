export const templateHome = () => {
  const home = `
  <h2>WELCOME</h2>
  <button type="button" class="btn-p"> <a href="#/Login">Login</a></button>
  <button type="button" class="btn-p"> <a href="#/Register">Register</a></button>
  <button type="button" class="btn-p"> <a href="#/Wall">Wall</a></button>`

  const divHome = document.createElement('div')
  divHome.id = 'c-container'
  divHome.innerHTML = home

  return divHome
}

/*
<section id = "initial-container">
  <header>
    <img src="img/MobileRabbit.png" alt="rabbit" id="img-rabbit">
    <a href="#/"><img src="img/Logo.png" alt="logo" id="logo"></a>
  </header>
  <div id="s-container">

  </div>
</section>
*/
