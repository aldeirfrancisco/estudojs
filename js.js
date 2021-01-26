function calcular(){
     const numeros = [...arguments]
    return numeros.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
     
function dividir(){
   
     return calcular(...arguments) / arguments.length;
   
}
let nome ="aldeir";
let nome ="al";
console.log(nome)
 nome ="silva"
 console.log(nome)
    
         
    
 
   

 
