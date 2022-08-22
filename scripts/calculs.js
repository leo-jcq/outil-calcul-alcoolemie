function calculAlcoolemie() {
    // récupération des inputs
    let nbVerres = document.getElementById("nbVerresInput");
    let sexe = document.getElementById("sexeSelector");
    let poid = document.getElementById("poidInput");
    let temps = document.getElementById("tempsInput");
    let permis = document.getElementById("permis");

    // calcul de l'alcoolémie
    let alcoolemie = ((nbVerres.value * 10) / (poid.value * sexe.value)) - ((temps.value - 0.5) * poid.value * 0.002);
    if (alcoolemie < 0) {
        alcoolemie = 0;
    } else {
        alcoolemie = alcoolemie.toFixed(2);
    }

    // affichage de l'alcoolémie
    let taux = document.getElementById("taux");
    taux.innerHTML = alcoolemie;

    // condition pour prendre le volant
    let volant = document.getElementById("volant");
    if (!permis.checked) {
        if (alcoolemie < 0.5) {
            volant.innerHTML = "Vous pouvez prendre le volant !";
        } else{
            volant.innerHTML = "Votre taux d'alcoolémie est trop élevé pour prendre le volant !";
        }
    } else {
        if (alcoolemie < 0.2) {
            volant.innerHTML = "Vous pouvez prendre le volant !";
        } else{
            volant.innerHTML = "Votre taux d'alcoolémie est trop élevé pour prendre le volant !";
        }
    }
}