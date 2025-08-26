var Carros = /** @class */ (function () {
    function Carros(marca) {
        this.marca = marca;
    }
    return Carros;
}());
var Carro1 = new Carros('Toyota');
console.log(Carro1);
var Carro2 = new Carros('Honda');
Carro1.marca = "Fiat";
console.log("Marca:" + Carro1.marca);
