export const modalDelete = () => {
    const modal = `
    <p id="msn-delete">Esta seguro que desea eliminar el post</p>
    <button type="button" name="button" id="btn-acept-delete">Aceptar</button>
    <button type="button" id="exit" class="btn-p">Salir</button>

    `

    const divModal = document.createElement('div')
    divModal.id = 'modale-delete'
    divModal.innerHTML = modal

    return divModal
}