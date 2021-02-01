window.onload =function () {
    'use strict';
    const textTituluo = document.getElementById("txtTitulo");
    const btn = document.getElementById("btn");
    const formCadastro = document.querySelector(".formCadastro")
    // btn.addEventListener("click",function(e){

    // })
     formCadastro.addEventListener('submit', function (e) {
        if(!textTituluo.value){
            alert("preencha todos os campos")
            e.preventDefault()// para o emvio do formulario
            textTituluo.focus()
        }
    })
}