//Variáveis
let nome: string = 'João';
let idade: number = 25;
let ativo: boolean = true;

//Vetores
let números: number[] = [1,2,3,4];
let nomes: string[] = ['Ana', 'Bruno', 'Carlos'];
let misto: (string | number)[] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number> = ['Ana', 25, 'Carlos', 30];

//Tuplas
let pessoa: [string, number] =  ['Maria', 30];

//União de tipos
let id: number | string = 123;
id = 'ABC123';

//Interfaces
interface Usuário{
    nome: string,
    idade: number,
    email?: string; //opcional
}

//Utilização de interfaces
let novoUsuário: Usuário = {
    nome: 'Amanda',
    idade: 18
};

//console.log(novoUsuário);

function saudação(nome: string): string{
    return `Olá ${nome}`;
}

console.log(saudação("Leandro"));

function exibirUsuário(usuario: Usuário): void{
    console.log(`Nome:${usuario.nome}`);
    console.log(`Idade:${novoUsuário.idade}`);
}

exibirUsuário({nome: `Marcos`, idade: 22});

function listarNomes(nomes: string[]): void{
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']);