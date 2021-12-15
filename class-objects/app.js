"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade += +10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaCarros = listDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaCarros;
    }
}
class Pessoa {
    constructor(nome, carroPrefido) {
        this.carroPrefido = carroPrefido;
        this.nome = nome;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPrefido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    CarroQueTem() {
        return this.carro;
    }
}
// criar carros
let carroA = new Carro("Dodge", 4);
let carroB = new Carro("Kombi", 3);
let carroC = new Carro("Fusca", 2);
// let listDeCarros: Array<Carro> = [carroA, carroB, carroB];
// ou
let listDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria("AV paulista", listDeCarros);
// exibir lista de carros
//console.log(concessionaria.mostrarListaDeCarros());
// comprar carro
let cliente = new Pessoa("João", "Fusca");
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.CarroQueTem());
