function ExibeOcultaFilhos(id)
{
   var elem = document.getElementById(id);

    //Ternario, usado para atribuição condicional (igual um IF)
    elem.style.display = (elem.style.display === "none" || elem.style.display==="") ? "block" : "none"; 

    //Definição de um ternario
    //var xiz = condição ? valor_se_verdadeiro : valor_se_falso;

}


function teste() {
    var id = [0, 1, 2, 3];
    var horario = ["18:55 - 19:45", "19:55 - 20:45", "16:55 - 17:45"];
    var tema = ["LAI", "EAD", "Raciocinio Logico"];
    var data = ["22/08/19", "16/04/19", "12/06/19"];

    var html = "";
    for (var a = 0; a < id.length ; a++) {
        html += "<tr>";
        html += "<td>" + horario[a] + "</td>";
        html += "<td>" + tema[a] + "</td>";
        html += "<td>" + data[a] + "</td>";
        html += "</tr>";
    }
    $("#Tabela").append(html);
}

function montarTabela() {
    var html = "";
    for (var a = 0; a < 10; a++) {
        html += "<tr>";
        for (var b = 0; b < 3; b++) {
            html += "<td>" + (a * b) + "</td>";
        }
        html += "</tr>";
    }
    $("#Tabela").append(html);
}