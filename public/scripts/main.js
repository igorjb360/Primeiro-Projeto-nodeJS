import Modal from './modal.js'

const modal = Modal()

// aqui estou querendo pegar  o que está dentro da modal o h2
const modalTitle = document.querySelector('.modal h2')
// aqui estou querendo pegar  o que está dentro da modal o p
const modalDescription = document.querySelector('.modal p')
// aqui escou querendo pegar o botao sim excluir 
const modalButton = document.querySelector('.modal button')

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


