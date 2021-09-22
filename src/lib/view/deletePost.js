export const modalDelete = () => {
  const modal = `
  <div id= div-delete>
    <p id="msn-delete">Esta seguro que desea eliminar el post</p>
     <div id= div-btn>
     <button type="button" name="button" id="btn-acept-delete">Aceptar</button>
     <button type="button" id="exit" class="btn-p btn-exit">Salir</button>
     </div>
  </div>
    `

  const sectionModal = document.createElement('section')
  sectionModal.id = 'modale-delete'
  sectionModal.className = 'delete-modal'
  sectionModal.innerHTML = modal

  return sectionModal
}
