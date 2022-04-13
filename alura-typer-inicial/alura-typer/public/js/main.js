let frase = $(".frase").text();
let numPalavras = frase.split(/\S+/).length;
let tamanhoDaFrase = $("#tamanhoDaFrase");
tamanhoDaFrase.text(numPalavras);

let campo = $(".campo-de-digitacao");
campo.on("input", function(){
  let conteudo = campo.val()
  let quantidadePalavras = conteudo.split(/\S+/).length - 1;
  $("#contador-palavras").text(quantidadePalavras);

  let quantidadeCaracteres = conteudo.length;
  $("#contador-caracteres").text(quantidadeCaracteres);
})

let tempoRestante = $("#tempo-digitacao").text();
campo.on("focus",function(){
  setInterval(function(){
     tempoRestante--;
     console.log(tempoRestante);
     $("#tempo-digitacao").text(tempoRestante);
     if (tempoRestante < 1){
          campo.attr("disabled",true);
          tempoRestante = 1;

     };

  },1000);
})

let botao = $("#botaoRestart");
botao.on("click", function(){
console.log("working");

})