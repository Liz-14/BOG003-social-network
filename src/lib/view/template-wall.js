import { logOut } from '../firebase/fireFunctions.js'
import { modalDelete } from './deletePost.js'

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


  <div class = "v-log"></div>
  `
  const divW = document.createElement('div')
  divW.id = 'w-container'
  divW.innerHTML = wall

  // ----------------------  Verificacion ususario Logueado ------------------------------------

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const db = firebase.firestore()

      // Mensaje de bienvenida
      document.querySelector('.v-log').innerHTML = `
      <h2>Hi ${user.displayName}!</h2>
      <img src="img/loadingw.png" alt="logo" class="loading">`
      setTimeout(() => { document.querySelector('.v-log').style.display = 'none' }, 2000)

      // Evento para crear una publicacion
      const btnCreatePost = divW.querySelector('#btn-publish')
      btnCreatePost.addEventListener('click', () => {
        const post = `
          <div class="container-posts">
            <div id="title-post">
              <h2 id = "pet-name" class = "user-name-post"></h2>
              <h3 id = "date-post"></h3>
            </div>

            <div id="write">
              <textarea id="write-post" placeholder= "¿Qué hiciste hoy?"></textarea>
              <button type="button" id="send-post" class="btn-p">Publicar</button>
            </div>
          </div>`

        const container = document.getElementById('posts')
        container.innerHTML = post
        container.querySelector('.user-name-post').textContent = `${user.displayName}`

        // Evento para guardar en firestore la publicacion
        const btnPublish = container.querySelector('#send-post')
        btnPublish.addEventListener('click', () => {
          const writePost = document.getElementById('write-post').value
          db.collection('muro').add({
            petname: user.displayName,
            post: writePost,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            likes: []
          })
            .then((docRef) => {
              console.log('Document written with ID: ', docRef.id)
              // db.collection('muro').orderBy('date', 'desc')
            })
            .catch((error) => {
              console.error('Error adding document: ', error)
            })
        })
      })

      // Funcion para mostrar en el muro en tiempo real las publicaciones
      db.collection('muro').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
        document.getElementById('posts').innerHTML = ''

        // Se obtiene la fecha de puclicacion
        querySnapshot.forEach((doc) => {
          const date = new Date(doc.data().date && doc.data().date.seconds * 1000)
          const days = date.getDate()
          const month = date.getMonth() + 1
          const year = date.getFullYear()

          // Creacion del post
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
                <li> <button type="button" class = "btns-crud" id="btn-delete" data-id = "${doc.id}"> <img src="img/delete.png" alt="logo" class="img-btn-wall"></button> </li>
                <li> <button type="button" class = "btn-post-edit" data-post ="${doc.data().post}" id="btn-edit"><img src="img/edit.png" alt="logo" class="img-btn-wall"></button> </li>
              </ul>
            </div>`
        })

        // Evento editar post
        const btnEdit = document.querySelectorAll('.btn-post-edit')
        btnEdit.forEach(elements => {
          console.log(elements)

          const contentPost = elements.dataset.post
          console.log(contentPost)

          elements.addEventListener('click', () => {
            const post = `
        <div class="container-posts">
          <div id="title-post">
            <h2 id = "pet-name" class = "user-name-post"></h2>
            <h3 id = "date-post"></h3>
          </div>

          <div id="write">
            <textarea id="write-post" placeholder= "¿Qué hiciste hoy?"></textarea>
            <button type="button" id="send-post" class="btn-p">Editar</button>
          </div>
        </div>`

            const container = document.getElementById('posts')
            container.innerHTML = post
            container.querySelector('.user-name-post').textContent = `${user.displayName}`
            console.log(elements.dataset.id)

            const docRef = db.collection('muro').doc(id)

            docRef.get().then((doc) => {
              if (doc.exists) {
                console.log('Document data:', doc.data())
              } else {
              // doc.data() will be undefined in this case
                console.log('No such document!')
              }
            }).catch((error) => {
              console.log('Error getting document:', error)
            })
          })
        })

        // Evento que permite al boton eliminar un post especifico
        const btnDelete = document.querySelectorAll('.btns-crud')
        btnDelete.forEach(elements => {
          elements.addEventListener('click', () => {
            const wSection = document.getElementById('w-section')
            wSection.insertBefore(modalDelete(), wSection.childNodes[0])

            const btnAceptDelete = document.getElementById('btn-acept-delete')
            btnAceptDelete.addEventListener('click', () => {
              deletePost(elements.dataset.id)
              wSection.removeChild(document.getElementById('modale-delete'))
            })
          })
        })
      })

      // Funcion para editar post
      const editPost = (id, post) => {
        document.getElementById('write-post').value = post
        const collectionRef = db.collection('muro').doc(id)

        // Set the "capital" field of the city 'DC'
        return collectionRef.update({
          post: writePost
        })
          .then(() => {
            console.log('Document successfully updated!')
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error)
          })
      }

      // Funcion que permite elminar post
      const deletePost = (id) => {
        db.collection('muro').doc(id).delete()
          .then(() => {
            console.log('Document successfully deleted!')
          }).catch((error) => {
            console.error('Error removing document: ', error)
          })
      }
    } else {
      document.querySelector('.v-log').innerHTML = '<h2>Hola, necesitas loguearte</h2>'
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
