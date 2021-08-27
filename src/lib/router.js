//import { templateRegister } from './lib/view/template-register.js'
import { templateHome } from './view/template-home.js'
import { templateRegister } from './view/template-register.js';

const container = document.getElementById("p-container");
container.appendChild(templateHome());
console.log(templateRegister())
export const router = (route) => {
    document.getElementById("s-container").innerHTML="";
    switch(route) {
        
        case "#/":
           // document.getElementById("register").innerHTML="";
            return container.appendChild(templateHome());
        case "#/Register":
           // document.getElementById("welcome").innerHTML="";
            return container.appendChild(templateRegister());
        case "#/Loguin":
            return console.log("Loguin")
        default:
            return console.log("404!!")
    }

}