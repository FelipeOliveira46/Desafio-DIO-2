function calcularNivel (vitorias, derrotas) {
    let saldovitorias = vitorias - derrotas;
    let nivel = "";
}

if (vitorias < 10) {
    nivel = " ferro";
}
 else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
}
else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
}
else if (vitoria <= 51 && vitorias <= 80) {
    nivel = "Ouro";
}else if (vitorias <= 81 && vitorias <= 90) {
    nivel = "Diamante";
}
else if (vitorias <= 91 && vitorias <= 100) {
    nivel = "Lendario";
}
 else if (vitoria >= 101 ) {
    nivel = "Imortal";
 }
 return ` O heroi tem de saldo de **${saldoVitorias}** esta no nivel de **${nivel}**`;

 // Exemplo com multiplos jogadores 

 let jogadores = [
    { nome: "jogador 1", vitorias: 5, derrotas: 3 },
    { nome: "jogador 2", vitorias: 15, derrotas: 7 },
    { nome: "jogador 3", vitorias: 38, derrotas: 20 },
    { nome: "jogador 4", vitorias: 85, derrotas: 10 },
    { nome: "jogador 5", vitorias: : 102, derrotas: 1 }
 ];

 // Laço de repetição para percorrer todos os jogadores 
 for (let i = 0; i < jogadores.length; i++) {
    let jogador = jogadores [i];
    let resultado = calcularNivel (jogador.vitorias, jogador.derrotas);
    console.log (`${jogador.nome}: ${resultado}`);
 }