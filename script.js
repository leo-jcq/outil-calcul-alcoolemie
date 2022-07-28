let nbCoche = 0;

function decocherRadio(boutton) {
    nbCoche++;
    if (nbCoche % 2 == 0) {
        boutton.checked = false;
    }
}