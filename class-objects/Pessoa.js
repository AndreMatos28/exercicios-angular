"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Pessoa;
