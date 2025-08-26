class Carros{
    marca: String;

    constructor(marca: String){
        this.marca = marca;
    }
}

const Carro1 = new Carros('Toyota');

console.log(Carro1);

const Carro2 = new Carros('Honda');

Carro1.marca = "Fiat"

console.log("Marca:"+Carro1.marca)