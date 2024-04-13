class Hero
 {
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() 
    {
        let ataque;
        
        switch (this.tipo) 
        
        {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }
     // mensagem final!
        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Herois especificados
const hero1 = new Hero("Gandalf", 1500, "mago");
hero1.atacar();

const hero2 = new Hero("Aragorn", 35, "guerreiro");
hero2.atacar();

const hero3 = new Hero("Bruce Lee", 32, "monge");
hero3.atacar();

const hero4 = new Hero("Hanzo", 28, "ninja");
hero4.atacar();
