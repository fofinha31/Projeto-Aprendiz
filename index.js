// Solicita o nome e a quantidade de vitorias do herói e derrotas.
let vitorias = 100;
let derrotas = 20;

//criado a funcao de vitorias e derrotas do jogador e o nível, e o saldo foi feito o resultado.
function saldo( vitorias , derrotas)
{
  let resultado = vitorias - derrotas;
   return resultado;
}

function calcularnivel(vitorias , derrotas)
{
   let nivel = "";

   if (saldo (vitorias , derrotas) <= 10) 
{
    nivel = "Ferro";
} 
else if (saldo (vitorias , derrotas) <= 20) 
{
    nivel = "Bronze";
} 
else if (saldo (vitorias , derrotas) <= 50)
 {
    nivel = "Prata";
} 
else if (saldo (vitorias , derrotas) <= 80) 
{
    nivel = "Ouro";
} 
else if (saldo (vitorias , derrotas) <= 90) 
{
    nivel = "Diamanete";
} 
else if (saldo (vitorias , derrotas) <= 100) 
{
    nivel = "Lendario";
 } 
   else 
 {
    nivel = "Imortal";
 }

    return nivel;

}


// Exibe a mensagem final
console.log(" O Herói tem de saldo de " + (saldo (vitorias , derrotas))+ " está no nível de " + (calcularnivel(vitorias , derrotas) ));
