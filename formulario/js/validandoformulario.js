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
    const textDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = textDescricao.
    // contadorContainer.removeAttribute("style")
    contadorContainer.style.display ="block"
    
    function  checkLength(){
        let numeroLetraDigitada = this.value.length
          let caracteres = parseInt(maxima)- parseInt(numeroLetraDigitada)
          resta.textContent = caracteres
       
    })

    textDescricao.addEventListener("input",checkLength)
}