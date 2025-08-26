var SUV = /** @class */ (function () {
    function SUV() {
    }
    SUV.prototype.dirigir = function () {
        console.log("Dirigindo um SUV! :3");
    };
    return SUV;
}());
var Esportivo = /** @class */ (function () {
    function Esportivo() {
    }
    Esportivo.prototype.dirigir = function () {
        console.log("Dirigindo um Esportivo! :3");
    };
    return Esportivo;
}());
var Sedan = /** @class */ (function () {
    function Sedan() {
    }
    Sedan.prototype.dirigir = function () {
        console.log("Dirigindo um Sedan! :3");
    };
    return Sedan;
}());
var Montadora = /** @class */ (function () {
    function Montadora() {
    }
    Montadora.Fabricação = function (tipo) {
        if (tipo === "SUV") {
            return new SUV();
        }
        else if (tipo === "Esportivo") {
            return new Esportivo();
        }
        else if (tipo === "Sedan") {
            return new Sedan();
        }
        else {
            throw new Error("Tipo de Carro Não Fabricado Aqui!");
        }
    };
    return Montadora;
}());
var МояМашина = Montadora.Fabricação('Esportivo');
МояМашина.dirigir();
