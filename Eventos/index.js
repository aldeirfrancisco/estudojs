
(function (){
 'use strict'
 window.onload=function(){
 const btn4 = document.getElementById("btn1")
 const btn5 = document.getElementById("btn2")
 const btn6 = document.getElementById("btn3")
 const container = document.getElementById("contanier")
//  btn4.addEventListener("click",function(obj){

//      console.log("funcionou! btn4")
//  })
//  btn5.addEventListener("click",function(obj){

//      console.log("funcionou! btn5")
//  })
//  btn6.addEventListener("click",function(obj){

//      console.log("funcionou! btn6")
//  })

container.addEventListener("click",function (e) {

console.log(e.target)

console.log("conteiner")
})
 }
})()