var lista = document.querySelector("#flista");
var valor = document.querySelector(".input");
var resultado = document.querySelector("#res");
var valores = [];

//validação
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
//Adicionando valores
function adicionar() {
    if (isNumero(valor.value) && !inlista(valor.value, valores)) {
        valores.push(Number(valor.value))

        let item = document.createElement("option");
        item.text = `Valor ${valor.value} adicionado`;
        lista.appendChild(item);
        resultado.innerHTML = '';

    } else {
        alert("Valor inválido ou já adicionado!")
    }
    valor.value = "";
    valor.focus();
}
// configurando botão finalizar e efetuando analise de dados!
function finalizar() {
    if (valores == 0) {
        alert("Favor adicionar valores antes de finalizar!");
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos];
            } if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = soma / tot;


        resultado.innerHTML = "";
        resultado.innerHTML += `<p>Ao todo temos ${tot} numeros adicionados.</p>`
        resultado.innerHTML += `<p>O maior valor é o ${maior}.</p> `
        resultado.innerHTML += `<p>O menor valor é o ${menor}.</p> `
        resultado.innerHTML += `a soma dos valores adicionados é ${soma}.</p> `
        resultado.innerHTML += `a media dos valores adicionados é ${media}.</p> `
    }

}
