function getRandomInt(max) {                  
  return Math.floor(Math.random() * Math.floor(max));
}

let rnumber = getRandomInt(4);


console.log(rnumber);

let number = prompt('digite el numero del 1 al 3 que piensa que es');
while(rnumber !== number){
  console.log('intena de nuevo');
  number = prompt(' fallaste digite otra vez el numero del 1 al 3 que piensa que es')

}

console('adivinaste!');