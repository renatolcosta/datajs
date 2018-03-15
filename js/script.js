// function dataHoje() {
//     var data = new Date();
//     var dia = data.getDate();
//     var mes = data.getMonth() + 1;
//     if (mes < 10) {
//         mes = "0" + mes;
//     }
//     var ano = data.getFullYear();
//     var horas = new Date().getHours();
//     if (horas < 10) {
//         horas = "0" + horas;
//     }
//     var minutos = new Date().getMinutes();
//     if (minutos < 10) {
//         minutos = "0" + minutos;
//     }
//     var result = "São Paulo " + dia + " de " + mes + " de " + ano + "  " + horas + ":" + minutos + "hs";
//     return result;
// }

function atualizaHorario() {
    var data = new Date(),
        meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        horas = data.getHours(),
        minutos = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes(),
        separador = ':',
        complemento = 'hs',
        horario = horas + separador + minutos + complemento,
        dataExtenso = ['São Paulo ', data.getDate(), ' de ', meses[data.getMonth()], ' de ', data.getFullYear()].join(' ');
    document.getElementById('time').innerHTML = [dataExtenso, horario].join(' ');
    setTimeout(atualizaHorario, 1000);
}
atualizaHorario();

$(document).ready(function() {
    // console.log("ready!");
    // $('.time-label').html(dataHoje());
});