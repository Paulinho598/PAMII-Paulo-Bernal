interface Carro{
    dirigir(): void;
}

class SUV implements Carro{
    dirigir(){
        console.log("Dirigindo um SUV! :3")
    }
}

class Esportivo implements Carro{
    dirigir(){
        console.log("Dirigindo um Esportivo! :3")
    }
}

class Sedan implements Carro{
    dirigir(){
        console.log("Dirigindo um Sedan! :3")
    }
}

class Montadora{
    static Fabricação(tipo: String): Carro{
        if (tipo === "SUV"){
            return new SUV()
        }else if(tipo === "Esportivo"){
            return new Esportivo()
        }else if(tipo === "Sedan"){
            return new Sedan()
        }else{
            throw new Error("Tipo de Carro Não Fabricado Aqui!")
        }
    }
}

const МояМашина = Montadora.Fabricação('Esportivo')
МояМашина.dirigir()