function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const IdAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(IdAudio);
    }


    tecla.onkeydown = function () {
        tecla.classList.add("ativa");
        ///////////////////
        tocaSom(IdAudio);
        setTimeout(() => {
            tecla.classList.remove("ativa");
        }, 200);
        ///////////////////
    }








    /*tecla.onkeydown = function () {
        tecla.classList.add("ativa");

    }

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    }*/

}