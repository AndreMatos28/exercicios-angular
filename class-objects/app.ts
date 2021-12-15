class Carro {
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroDePortas: number){
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar (): void {
        this.velocidade += +10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }    
}

class Concessionaria {
    private endereco: string;
    private listaCarros: Carro[];

    constructor (endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco;
        this.listaCarros = listDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Carro[] {
        return this.listaCarros;
    }
}

class Pessoa {
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

console.log(cliente.CarroQueTem());