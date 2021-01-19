function calcular(){
     const numeros = [...arguments]
    return numeros.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
     
function dividir(){
   
     return calcular(...arguments) / arguments.length;
   
}
 
    
         
    
 
   

 
