//Configuração "Input/Prompt"
/*

import { read } from "fs"
import { Interface } from "readline"

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function askQuestion(question){
    return new Promise(resolve => {
        readline.question(question, answer => {
            resolve(answer)
        })
    })
}

*/
// Exercício 1: Variáveis e Tipos de Dados
/*var nome, idade

nome = "Alice"
idade = 18

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`)*/
//Exercício 2: Operadores
/*async function calcular(){
    const x = Number(await askQuestion("Digite o primeiro número:") || "0")
    const y = Number(await askQuestion("Digite o primeiro número:") || "0")

    console.log("Soma:",(x+y))
    console.log("Subtração:",(x-y))
    console.log("Multiplicação:",(x*y))

    if(y !== 0){
        console.log("Divisão:",(x/y))
    }else{
        console.log("Num dá pra fazer divisão por zero minha coisa linda. :)")
    }
}

calcular().then(() => readline.close())*/
//Exercício 3: Condições
/*async function verificarIdade(){
    const idade = Number(await askQuestion("Digite a sua idade:") || "0")

    if(idade >= 18){
        console.log("Você já pode ser preso.")
    }else{
        console.log("Num pode beber, espera pra pedir pro teu tio a 51 aos 14, e conta pro teu pai que só vai beber depois dos 18.")
    }
}

verificarIdade().then(() => readline.close())*/
//Exercício 4: Loops
/*for(var i = 0; i<=100; i++){
    console.log(i)
}*/
//Exercício 5: Funções
/*async function somar(){
    const x = Number(await askQuestion("Digite o primeiro número:") || "0")
    const y = Number(await askQuestion("Digite o primeiro número:") || "0")

    return console.log("Soma:",x+y)
}

somar().then(() => readline.close())*/
//Exercício 6: Vetor
/*var frutas = ["Morango","Manga","Goiaba"]

for(var i = 0; i<=2; i++){
    console.log(frutas[i])
}*/
//Exercício 7: Objetos
/*interface livro{
    título: String
    autor: String
    páginas: Number
}

var Carmilla: livro = {
    título: "Carmilla",
    autor: "Sheridan Le Fanu",
    páginas: 108
}

console.log(Carmilla)*/
//Exercício 9: Manipulação de Strings
/*async function ManipulaçãoStrings(){
    var frase = await(askQuestion("Digite uma sentença qualquer:") || "") as string

    return console.log(frase.replace(/\b\w/g, c => c.toUpperCase()))
}

ManipulaçãoStrings().then(() => readline.close())*/
//Exercício 10: Promises e Fetch API
/*async function getData(){
    const url = "https://example.org/products.json"
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`O Estado do response: ${response.status}`)
        }

        const resultado = await response.json()
        console.log(resultado)
    }catch (error){
        console.error(error.message)
    }
}

getData().then(() => readline.close());*/ 
