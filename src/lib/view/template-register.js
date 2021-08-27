export const templateRegister = () => {
  const register = `
    <header>
    <img src="img/MobileRabbit.png" alt="rabbit" id="img-rabbit">
    <a href="#/"><img src="img/Logo.png" alt="logo" id="logo"></a>
    </header>
    <section id="register">
    <h2 class="background-title">Register</h2>
    <input type="text" class="input-register" placeholder="name">
    <input type="email" class="input-register" placeholder="email">
    <input type="email" class="input-register" placeholder="check email">
    <input type="password" class="input-register" placeholder="password">
    <input type="password" class="input-register" placeholder="check password">
    <button type="button" class="btn-p"> <a href="#/">Sign Up</a></button>
    <button type="button" class="btn-p" id="btn-g">
      <img src="img/logo_google.png" alt="" id="logo-google">
      <a href="#/">Sign Up</a>
    </button>
    <button type="button" class="btn-s"> <a href="#/Loguin">Loguin</a></button>
    </section>`

      const sectionRegister = document.createElement("section");
      sectionRegister.id = "s-container";
      sectionRegister.innerHTML = register;

  return sectionRegister
}
