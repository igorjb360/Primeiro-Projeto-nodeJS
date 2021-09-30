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
    button.addEventListener ("click", handleClick)
})

// aqui vou fazer a logica do delete para abrir a modalwrapper usa All para pegar todas as variaveis
const deletebutton = document.querySelectorAll(".actions a.delete")

deletebutton.forEach(button => {
    // add a escuta quando clicar vai abrir a modal-wrapper
    button.addEventListener ("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    // aqui vai parar de alterar nossa url
    event.preventDefault()
    //aqui estou atribuindo essa variavel para siplificar o uso do text e do check
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)
   
    modalTitle.innerHTML = `${text} Essa pergunta`
    modalDescription.innerHTML = `tem certeza que deseja ${text.toLowerCase()} essa pergunta?` 
    modalButton.innerHTML = `Sim, ${text.toLowerCase()} `
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir modal
    modal.open()
}


