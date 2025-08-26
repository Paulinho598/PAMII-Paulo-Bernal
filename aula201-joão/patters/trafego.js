var CentraldeTrafego = /** @class */ (function () {
    function CentraldeTrafego() {
        console.log("Central de trafego iniciada!");
    }
    CentraldeTrafego.getInstance = function () {
        if (!CentraldeTrafego.instance) {
            CentraldeTrafego.instance = new CentraldeTrafego();
        }
        return CentraldeTrafego.instance;
    };
    CentraldeTrafego.prototype.emitirAlerta = function (mensagem) {
        console.log("Alerta: ".concat(mensagem));
    };
    return CentraldeTrafego;
}());
var central1 = CentraldeTrafego.getInstance();
var central2 = CentraldeTrafego.getInstance();
central1.emitirAlerta("Acidente na Rodovia Marginal Tietê!");
