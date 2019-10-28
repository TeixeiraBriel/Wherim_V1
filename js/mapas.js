function ExibeOcultaFilhos(id)
{
   var elem = document.getElementById(id);

    //Ternario, usado para atribuição condicional (igual um IF)
    elem.style.display = (elem.style.display === "none" || elem.style.display==="") ? "block" : "none"; 

    //Definição de um ternario
    //var xiz = condição ? valor_se_verdadeiro : valor_se_falso;

}
function caminho(){
    var pa = document.querySelector("#atual").value;
    var dest = document.querySelector("#destino").value;
    if (pa == 311, dest == 308){
        var final = "img/311308.jpeg";
        document.querySelector("#atual").value = ""; 
        document.querySelector("#destino").value = "";
        document.querySelector("#img").src = final;
    }
    else {
        if (pa == 311, dest == 326){
            var final = "img/311326.jpeg";
            document.querySelector("#atual").value = ""; 
            document.querySelector("#destino").value = "";
            document.querySelector("#img").src = final;
        }
        else {
            if (pa == 326, dest == 311){
                var final = "img/326311.jpeg";
                document.querySelector("#atual").value = ""; 
                document.querySelector("#destino").value = "";
                document.querySelector("#img").src = final;
            }
        }
    }

}
function reset(){
    var pa = document.querySelector("#atual").value;
    var dest = document.querySelector("#destino").value;
    var final = "img/base.jpg";
    document.querySelector("#atual").value = ""; 
    document.querySelector("#destino").value = "";
    document.querySelector("#img").src = final;
}

function resetNovo() {
    var pa = document.querySelector("#atual").value;
    var dest = document.querySelector("#destino").value;
    var final = "img/MapaBranco.png";
    document.querySelector("#atual").value = "";
    document.querySelector("#destino").value = "";
    document.querySelector("#ultimoAtual").value = "sem buscas";
    document.querySelector("#ultimoDestino").value = "sem buscas";
    document.querySelector("#img").src = final;
}

function caminhoNovo() {
    var pa = document.querySelector("#atual").value;
    var dest = document.querySelector("#destino").value;
    var final = "img/" + pa + dest + ".png";
    document.querySelector("#ultimoAtual").value = pa;
    document.querySelector("#ultimoDestino").value = dest;

    document.querySelector("#atual").value = "";
    document.querySelector("#destino").value = "";
    document.querySelector("#img").src = final;
}