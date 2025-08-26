class CentraldeTrafego {
    private static instance: CentraldeTrafego;

    private constructor(){
        console.log("Central de trafego iniciada!")
    }

    static getInstance(): CentraldeTrafego{
        if(!CentraldeTrafego.instance){
            CentraldeTrafego.instance = new CentraldeTrafego();
        }
        return CentraldeTrafego.instance;
    }

    emitirAlerta(mensagem: String){
        console.log(`Alerta: ${mensagem}`)
    }
}

const central1 = CentraldeTrafego.getInstance()
const central2 = CentraldeTrafego.getInstance()

central1.emitirAlerta("Acidente na Rodovia Marginal Tietê!");

console.log(central1 === central2);