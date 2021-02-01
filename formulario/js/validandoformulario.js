(window.onload =function () {
    'use strict';
    const textTituluo = document.getElementById('txtTitulo');
    const btn = document.getElementById('btn');
    const formCadastro = document.querySelector(".formCadastro")
    // btn.addEventListener("click",function(e){

    // })
     formCadastro.addEventListener('submit', function (e) {
        if(!textTituluo.value){
            showErroMessage("preencha todos os campos")
            e.preventDefault()// para o emvio do formulario
            textTituluo.focus()
        }
    })
   
    const textDescricao = document.getElementById('txtDescricao')
    
    const contadorContainer = document.getElementById('contador')
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = textDescricao.maxLength
      mostrandoNumero(maxima)
    // contadorContainer.removeAttribute("style")
    contadorContainer.style.display ='block'
    
    function  checkLength(){
        let numeroLetraDigitada = this.value.length
          let caracteres = parseInt(maxima)- parseInt(numeroLetraDigitada)
         
       mostrandoNumero(caracteres)
    }
       textDescricao.addEventListener("input",checkLength)
       function mostrandoNumero(n){
       resta.textContent = n
       }
       console.log(btn)
    btn.disabled = true
    const chkAceito = document.getElementById('chkAceito')
     chkAceito.addEventListener("change",function(){
         btn.disabled = !this.checked
     })
    const feedbackMessage = document.getElementById('feedbackMessage')
    
      function  showErroMessage(msn){
         feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msn;
    }
})()      