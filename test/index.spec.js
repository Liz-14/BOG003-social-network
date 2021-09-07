// importamos la funcion que vamos a testear
import { register } from '../lib/firebase/fireFunctions'
var firebasemock = require('firebase-mock');

var mockauth = new firebasemock.MockAuthentication();
//var mockfirestore = new firebasemock.MockFirestore();
var mocksdk = new firebasemock.MockFirebaseSdk(

  () => {
    return mockauth;
  },
  // use null if your code does not use FIRESTORE
  //() => {
    //return mockfirestore;
  //},
);
mocksdk.auth().autoFlush();
global.firebase = mocksdk;


describe("register", () => {
  it('debería ser una función', () => {
    expect(typeof register).toBe('function')
  })
}) 
