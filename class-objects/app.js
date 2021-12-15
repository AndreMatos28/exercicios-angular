"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Moto_1 = __importDefault(require("./Moto"));
// criar carros
let carroA = new Carro_1.default("Dodge", 4);
let carroB = new Carro_1.default("Kombi", 3);
let carroC = new Carro_1.default("Fusca", 2);
// let listDeCarros: Array<Carro> = [carroA, carroB, carroB];
// ou
let listDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default("AV paulista", listDeCarros);
// exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros());
// comprar carro
let cliente = new Pessoa_1.default("João", "Fusca");
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
let moto = new Moto_1.default("Susuki");
console.log(listDeCarros);
moto.acelerar();
moto.acelerar();
console.log(moto);
