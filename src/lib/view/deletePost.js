
export const modalDelete = () => {
  const modal = `
  <div id="container-modal-delete">
    <p id="msn-delete">Esta seguro que desea eliminar el post</p>
    <div id="acept-exit-div">
    <button type="button" name="button" id="btn-acept-delete" class="btn-modal-delete">Aceptar</button>
    <button type="button" id="exit" class="btn-modal-delete btn-exit">Salir</button>
  </div> `

  const sectionModal = document.createElement('section')
  sectionModal.id = 'modale-delete'
  sectionModal.className = 'delete-modal'
  sectionModal.innerHTML = modal

  return sectionModal
}
