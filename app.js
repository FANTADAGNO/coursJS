<?xml version="1.0" encoding="utf-8" ?>
    <configuration>
    
</configuration>
    const prenom = prompt("Entrez votre prenom");
alert('Bonjour, ${prenom}');
function presentation(prenom,age){
   
console.log('Ton prenom est: ${prenom} et tu as ${age} ans ')
}
presentation("Fanta",21);

function calculer(a,operation,b){
  switch(operation) {
    case "+":
      resultat= a + b; 
      break;
    case "-":
      resultat= a - b;
      break;
    case "*":
      resultat= a * b;
      break;
    case "/":
      resultat= a / b;
      
  }
  return resultat;
}
console.log(calculer(4, "+", 6));  
console.log(calculer(4, "-", 6));  
console.log(calculer(2, "*", 0));  
console.log(calculer(12, "/", 0));


const nombre = 7; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

let i=1;
for(i=1;i<=10;i++){
  console.log(` ${nombre} x ${i}=${nombre * i}`);
}



