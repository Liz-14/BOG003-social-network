import { logOut } from '../firebase/fireFunctions.js'


export const templateWall = () => {
  const wall = `
  <header id = "mobile-header">
    <button type="button" class = "btn-logout" id="btn-logout-mobile"><a href="#/"><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>
    <img src="img/Logo.png" alt="logo" id="logo-w">
  </header>
  <section id = "posts"></section>
  <nav id = "mobile-nav">
    <ul>
      <li> <button type="button" id="btn-home"> <a href="#"> <img src="img/home.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
      <li> <button type="button" id="btn-publish"> <img src="img/publish.png" alt="logo" class="img-btn-nav"></button> </li>
      <li> <button type="button" id="btn-perfil"> <a href="#"> <img src="img/perfil.png" alt="logo" class="img-btn-nav" id="img-perfil"> </a> </button> </li>
    </ul>
  </nav>


  <header id = "pc-header">
    <img src="img/Logo.png" alt="logo" id="logo-w">
    <button type="button" class = "btn-logout" id="btn-logout-pc"><a href=""><img src="img/btnLogout.png" alt="logo" id="img-logout"></a></button>

    <nav id = "pc-nav">
      <ul>
        <li> <button type="button" id="btn-home-pc"> <a href="#"> <img src="img/home.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
        <li> <button type="button" id="btn-publish-pc"> <a href="#"> <img src="img/publish.png" alt="logo" class="img-btn-nav"> </a> </button> </li>
        <li> <button type="button" id="btn-perfil-pc"> <a href="#"> <img src="img/perfil.png" alt="logo" class="img-btn-nav" id="img-perfil"> </a> </button> </li>
      </ul>
    </nav>
  </header>


  <h2 class = "v-log"></h2>
  `
  // <h2 class = "user-name-post"></h2>
  // <p class = "user-text-post"></p>
  const divW = document.createElement('div')
  divW.id = 'w-container'
  divW.innerHTML = wall

  // ----------------------  TEMPORALES ------------------------------------

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const db = firebase.firestore()

      document.querySelector('.v-log').innerHTML = `Bienvenid@ ${user.displayName}`
      setTimeout(() => { document.querySelector('.v-log').style.display = 'none' }, 3000)

      const btnCreatePost = divW.querySelector('#btn-publish')
      btnCreatePost.addEventListener('click', () => {
        const post = `
          <div class="container-posts">
            <div id="title-post">
              <h2 id = "pet-name" class = "user-name-post"></h2>
              <h3 id = "date-post">c:</h3>
            </div>

            <div id="write">
              <textarea id="write-post" placeholder= "¿Qué hiciste hoy?"></textarea>
              <button type="button" id="send-post" class="btn-p">Publicar</button>
            </div>
          </div>`


        const container = document.getElementById('posts')
        container.innerHTML = post
        container.querySelector('.user-name-post').textContent = `${user.displayName}`

        const btnPublish = container.querySelector('#send-post')
        btnPublish.addEventListener('click', () => {
          // console.log("hola")
          const writePost = document.getElementById('write-post').value
          db.collection('muro').add({
            petname: user.displayName,
            post: writePost,
            date: firebase.firestore.FieldValue.serverTimestamp()
          })
            .then((docRef) => {
              console.log('Document written with ID: ', docRef.id)

            })
            .catch((error) => {
              console.error('Error adding document: ', error)
            })
        })

      })
      db.collection('muro').onSnapshot((querySnapshot) => {

        document.getElementById('posts').innerHTML = ''
        querySnapshot.forEach((doc) => {

          const date = new Date(doc.data().date && doc.data().date.seconds * 1000)
          const days = date.getDate()
          const month = date.getMonth() + 1
          const year = date.getFullYear()

          //console.log(`${doc.id} => ${days}/${month}/${year} ${hours}:${minutes}:${seconds}`);
          document.getElementById('posts').innerHTML += `
           <div class="container-posts">
            <div id="title-post">
            <h2 id = "pet-name" class = "user-name-post">${doc.data().petname}</h2>
            <h3 id = "date-post">${days}/${month}/${year} </h3>
          </div>

          <div id="write">
            <p id="write-post" >${doc.data().post}</p>
          </div>

          <ul>
          <li> <button type="button" id="btn-like"> <img src="img/like.png" alt="logo" class="img-btn-wall"></button> </li>
          <li> <button type="button" class = "btns-crud" id="btn-delete"> <img src="img/delete.png" alt="logo" class="img-btn-wall"></button> </li>
          <li> <button type="button" id="btn-edit">Edit</button> </li>
          </ul>
          </div>`

          const btnDelete = document.querySelector('.btns-crud')
          btnDelete.addEventListener('click', () => deletePost(`${doc.id}`))
          console.log(`${doc.id}`)

        });
      });
      
    } else {
      document.querySelector('.user-name-post').textContent = 'No toy logueado'
    }
  })

  const btnLogoutMobile = divW.querySelector('#btn-logout-mobile')
  btnLogoutMobile.addEventListener('click', () => {
    document.querySelector('#initial-container').style.display = 'block'
    logOut()
    location.hash = '#/'
  })

  const btnLogoutPC = divW.querySelector('#btn-logout-pc')
  btnLogoutPC.addEventListener('click', () => {
    document.querySelector('#initial-container').style.display = 'block'
    logOut()
    location.hash = '#/'
  })

  // ----------------------------------------------------------------------------
  return divW
}

