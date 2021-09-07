// importamos la funcion que vamos a testear
import { register } from '../lib/firebase/fireFunctions'
const firebasemock = require('firebase-mock')

const mockauth = new firebasemock.MockAuthentication()
// var mockfirestore = new firebasemock.MockFirestore();
const mocksdk = new firebasemock.MockFirebaseSdk(

  () => {
    return mockauth
  }
  // use null if your code does not use FIRESTORE
  // () => {
  // return mockfirestore;
  // },
)
mocksdk.auth().autoFlush()
global.firebase = mocksdk

describe('register', () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function')
  })
})
