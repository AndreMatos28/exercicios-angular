import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";
import Moto from "./Moto";



// criar carros
let carroA = new Carro("Dodge", 4);
let carroB = new Carro("Kombi", 3);
let carroC = new Carro("Fusca", 2);


// let listDeCarros: Array<Carro> = [carroA, carroB, carroB];
// ou
let listDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("AV paulista", listDeCarros);


// exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros());

// comprar carro

let cliente = new Pessoa ("João", "Fusca");


concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
   
    if(carro["modelo"] == cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro);
    }

});

let moto = new Moto("Susuki");

console.log(listDeCarros);
moto.acelerar();
moto.acelerar();
console.log(moto);