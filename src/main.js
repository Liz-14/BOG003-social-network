// Este es el punto de entrada de tu aplicacion
import { templateRegister } from './lib/view/template-register.js'
import {router} from './lib/router.js'
import { myFunction } from './lib/index.js'

myFunction()

window.addEventListener("hashchange", () =>{
    router(window.location.hash)
})


