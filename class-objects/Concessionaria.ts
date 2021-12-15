import Carro from "./Carro";

export default class Concessionaria {
    private endereco: string;
    private listaCarros: Carro[];

    constructor (endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco;
        this.listaCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaCarros;
    }
}