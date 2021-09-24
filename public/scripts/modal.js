export default function Modal(){     //module.exports serve para imporar a modal
    
    // atribui esssa variavel const aqui para poder so chamar o modalWrapper posteriormente e nao precisar ficar atribuindo o documnt
    const modalWrapper = document.querySelector('.modal-wrapper')
    //aqui estou pegando o botao cancelar
    const cancelButton = document.querySelector(".button.cancel")

    //aqui estou add o evento de click para fechar a função
    cancelButton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active da modal
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}

// aqui vou fazer a logica do delete para abrir a modalwrapper
const deletebutton = document.querySelectorAll(".actions a.delete")