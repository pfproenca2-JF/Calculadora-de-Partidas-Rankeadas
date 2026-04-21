/**
 * 2️⃣ Calculadora de Partidas Rankeadas
 * Requisitos: Variáveis, Operadores, Laços de repetição, Estruturas de decisões, Funções
 */

// FUNÇÃO: Recebe vitórias e derrotas como parâmetros
function calcularNivel(vitorias, derrotas) {
    // OPERADOR: Cálculo do saldo (Vitórias - Derrotas)
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // ESTRUTURAS DE DECISÕES: Classificação baseada nas VITÓRIAS
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna os valores para serem usados fora da função
    return { saldo: saldoVitorias, rank: nivel };
}

// VARIÁVEIS E LAÇO DE REPETIÇÃO: 
// Lista de jogadores para processar vários de uma vez
const listaJogadores = [
    { v: 7, d: 2 },
    { v: 15, d: 5 },
    { v: 45, d: 10 },
    { v: 120, d: 20 }
];

// Percorrendo a lista com um laço de repetição
for (let i = 0; i < listaJogadores.length; i++) {
    let vitorias = listaJogadores[i].v;
    let derrotas = listaJogadores[i].d;

    // Chamada da função e armazenamento do resultado em uma variável
    let resultado = calcularNivel(vitorias, derrotas);

    // SAÍDA: Exibição da mensagem final
    console.log(`O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.rank}**`);
}

