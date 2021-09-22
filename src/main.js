// Este es el punto de entrada de tu aplicacion
import { router } from './lib/router.js'

/* El evento hashchange es ejecutado cuando el fragmento identificador de la URL
ha cambiado (la parte de la URL que continúa despues del simbolo #, incluyendo
el símbolo #) */
window.addEventListener('hashchange', () => {
  // windo.location -> da la url actual
  router(window.location.hash)
})


