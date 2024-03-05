// Exercício 4

// Definindo os dias da semana
var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

// Entrada de dia, mês e ano
var dia = prompt("Digite o dia:");
var mes = prompt("Digite o mês:");
var ano = prompt("Digite o ano:");

// Criação da data a partir da entrada do usuário
if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
    var dataInformada = new Date(ano, mes - 1, dia);

    var diaSemanaInformado = diasDaSemana[dataInformada.getDay()];

    var hoje = new Date();
    var idadeCalculada = hoje.getFullYear() - dataInformada.getFullYear();

    // Ajuste caso o aniversário ainda não tenha ocorrido neste ano
    if (hoje.getMonth() < dataInformada.getMonth() || (hoje.getMonth() === dataInformada.getMonth() && hoje.getDate() < dataInformada.getDate())) {
        idadeCalculada--;
    }

    alert("A data " + dia + "/" + mes + "/" + ano + " é um(a) " + diaSemanaInformado + " e você tem " + idadeCalculada + " anos.");
} else {
    alert("Por favor, digite uma data válida.");
}
