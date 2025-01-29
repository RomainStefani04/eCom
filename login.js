window.addEventListener('load', () => {
    afficherConnexion()
});

afficherConnexion = () => {
    document.querySelector("#connexion").style.display = "block";
    document.querySelector("#inscription").style.display = "none";
}

afficherInscription = () => {
    document.querySelector("#inscription").style.display = "block";
    document.querySelector("#connexion").style.display = "none";
}