interface ModoDeDireção{
    dirigir(): void
}

class Esportivo implements ModoDeDireção{
    dirigir(){
        console.log("Modo Esportivo: Potência máxima.")
    }
}

class Econômico implements ModoDeDireção{
    dirigir(){
        console.log("Modo Econômico: Economia de combustível.")
    }
}

class OffRoad implements ModoDeDireção{
    dirigir(){
        console.log("Modo OffRoad: Preparado para terrenos difíceis..")
    }
}

class Carro{
    constructor(private modo: ModoDeDireção){}

    setModo(modo : ModoDeDireção){
        this.modo = modo
    }

    dirigir(){
        this.modo.dirigir()
    }
}

const МояМашина = new Carro(new Esportivo)
МояМашина.dirigir()

МояМашина.setModo(new Econômico)
МояМашина.dirigir()

МояМашина.setModo(new OffRoad)
МояМашина.dirigir()