
export const templateHome = () =>{
    const viewHome = `
    <header>
    <img src="img/MobileRabbit.png" alt="rabbit" id="img-rabbit">
    <a href="#/"><img src="img/Logo.png" alt="logo" id="logo"></a>
    </header>
    <div id= "welcome">
     <h2>WELCOME</h2>
     <button type="button" class="btn-p"> <a href="#/Loguin">Loguin</a></button>
     <button type="button" class="btn-p"> <a href="#/Register">Register</a></button>
   </div>
    `
    const sectionHome = document.createElement("section");
    sectionHome.id = "s-container";
    sectionHome.innerHTML = viewHome;
    
    return sectionHome
}

