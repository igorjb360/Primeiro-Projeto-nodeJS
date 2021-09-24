import Modal from './modal.js'

const modal = Modal()

// pegar quando o marcar como lido  for clicado
//pegar todos os botoẽs que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

// aqui estou checando o bottao 
checkButtons.forEach(button => {
    // add a escuta quando clicar vai abrir a modal-wrapper
    button.addEventListener ("click", event => {
        //abrir modal
        modal.open()
    })
})

// aqui vou fazer a logica do delete para abrir a modalwrapper usa All para pegar todas as variaveis
const deletebutton = document.querySelectorAll(".actions a.delete")

deletebutton.forEach(button => {
    // add a escuta quando clicar vai abrir a modal-wrapper
    button.addEventListener ("click", event => {
        //abrir modal
        modal.open()
    })
})


