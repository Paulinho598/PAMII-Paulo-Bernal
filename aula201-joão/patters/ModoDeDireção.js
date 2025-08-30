var Esportivo = /** @class */ (function () {
    function Esportivo() {
    }
    Esportivo.prototype.dirigir = function () {
        console.log("Modo Esportivo: Potência máxima.");
    };
    return Esportivo;
}());
var Econômico = /** @class */ (function () {
    function Econômico() {
    }
    Econômico.prototype.dirigir = function () {
        console.log("Modo Econômico: Economia de combustível.");
    };
    return Econômico;
}());
var OffRoad = /** @class */ (function () {
    function OffRoad() {
    }
    OffRoad.prototype.dirigir = function () {
        console.log("Modo OffRoad: Preparado para terrenos difíceis..");
    };
    return OffRoad;
}());
var Carro = /** @class */ (function () {
    function Carro(modo) {
        this.modo = modo;
    }
    Carro.prototype.setModo = function (modo) {
        this.modo = modo;
    };
    Carro.prototype.dirigir = function () {
        this.modo.dirigir();
    };
    return Carro;
}());
var МояМашина = new Carro(new Esportivo);
МояМашина.dirigir();
МояМашина.setModo(new Econômico);
МояМашина.dirigir();
МояМашина.setModo(new OffRoad);
МояМашина.dirigir();
