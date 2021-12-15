import Carro from "./Carro";

export default class Pessoa {
    private nome: string;
    private carro: Carro;
    private carroPrefido: string;

    constructor (nome: string, carroPrefido: string){
        this.carroPrefido = carroPrefido;
        this.nome = nome;
    }

    public dizerNome(): string {
       return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPrefido;
    }

    public comprarCarro(carro: Carro): void  {
        this.carro = carro;
    }

    public CarroQueTem(): Carro{
        return this.carro;
    }
}