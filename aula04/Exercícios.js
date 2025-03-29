//Exercícios
const readLine = require('readline-sync')

// Número 1
/*var num = readLine.question("Digite um número:")
if(num%2==0){
    console.log("É par!")
}else{
    console.log("É ímpar!")
}*/

//Número 2
/*var num = readLine.question("Digite um número:")
if(num==0){
    console.log("Esse número é o zero.")
}else if(num>0){
    console.log("Esse número é maior que zero.")
}else if(num<0){
    console.log("Esse número é menor que zero.")
}*/

//Número 3
/*var num = readLine.question("Digite um número:")
var total = 0
for(var i = 1; i <= num; i ++){
    total+=i
}
console.log(total)*/

//Número 4
/*var num = readLine.question("Digite um número:")
var N = parseInt(num)

if(N <= 0){
    console.log("Esse número não é primo.")
}else if(N === 1){
    console.log("Esse número não é primo.")
}else if(N === 2){
    console.log("Esse número é primo.")
}else if(N % 2 === 0){
    console.log("Esse número não é primo.")
}else{
    var Primo = true
    for(i = 3;i <= Math.floor(Math.sqrt(N));i+=2){
        if(N % i === 0){
            Primo = false
            console.log("Esse número não é primo.")
            break
        }
    }

    if(Primo){
        console.log("Esse número é primo.")
    }
}*/

//Número 5
/*var palavra = readLine.question("Escreva uma palavra:")
var escolha = readLine.question("Escreva a letra oara contar quantas vezes ela apareceu:")
var contador = 0

for(i=0;i<palavra.length; i++){
    var letra = palavra[i]

    if(letra === escolha){
        contador ++
    }
}

console.log("As vezes que a letra escolhida apareceu foi:"+ contador)*/

//Número 6
/*var palavra = readLine.question("Escreva uma palavra:")
var contrário = ""

for(var i = palavra.length - 1; i >= 0; i--){
    var letra = palavra[i]
    contrário += letra
}

console.log(contrário)*/