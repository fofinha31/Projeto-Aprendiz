// Solicita o nome e a quantidade de experiência (XP) do herói
    let nomeHeroi = "Rogue";
    let xpHeroi = 11000;

// Utiliza uma estrutura de decisão para determinar o nível do herói
    let nivel;

// o desafio que foi pedido esta errado (Se XP for menor 1000 = ferro)
esta errado . Eu fiz diferente.
   
if (xpHeroi <= 1000) {
        nivel = "Ferro";
    } else if (xpHeroi <= 2000) {
        nivel = "Bronze";
    } else if (xpHeroi <= 5000) {
        nivel = "Prata";
    } else if (xpHeroi <= 7000) {
        nivel = "Ouro";
    } else if (xpHeroi <= 8000) {
        nivel = "Platina";
    } else if (xpHeroi <= 9000) {
        nivel = "Ascendente";
    } else if (xpHeroi <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
 }

    // Saida da Estrutura
    console.log(" O Herói " + nomeHeroi + " está no nivel " + nivel )
