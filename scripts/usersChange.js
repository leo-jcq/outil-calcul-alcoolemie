let nbCoche = 0;

function decocherRadio(boutton) {
    nbCoche++;
    if (nbCoche % 2 == 0) {
        boutton.checked = false;
    }
    calculAlcoolemie();
}

function gardeNombrePositifs(input) {
    if (input.value < 0) {
        input.value = 0;
    }
    calculAlcoolemie();
}
