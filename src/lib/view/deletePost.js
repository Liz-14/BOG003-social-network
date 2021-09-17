
export const modalDelete = () => {
    const modal = `
    <div id="container-modal-delete">
    <p id="msn-delete">Esta seguro que desea eliminar el post</p>
    <div id="acept-exit-div">
    <button type="button" name="button" id="btn-acept-delete">Aceptar</button>
    <button type="button" id="exit" class="btn-p">Salir</button>
    </div>
    </div>
    `

    const sectionModal = document.createElement('section')
    sectionModal.id = 'modale-delete'
    sectionModal.innerHTML = modal

    return sectionModal
}
