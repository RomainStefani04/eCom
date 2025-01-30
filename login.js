window.addEventListener('load', () => {
    afficherConnexion()

    document.querySelector('#connexion').querySelector("form").addEventListener('submit', (e) => {
        e.preventDefault();
        connexion();
    });

    document.querySelector('#inscription').querySelector("form").addEventListener('submit', (e) => {
        e.preventDefault();
        inscription();
    });
});

afficherConnexion = () => {
    document.querySelector("#connexion").style.display = "block";
    document.querySelector("#inscription").style.display = "none";
}

afficherInscription = () => {
    document.querySelector("#inscription").style.display = "block";
    document.querySelector("#connexion").style.display = "none";
}

connexion = () => {
    var email = document.querySelector("#emailConnexion").value;
    var mdp = document.querySelector("#mdpConnexion").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.mdp === mdp) {
        alert('Connexion réussie');
    } else {
        alert('Email ou mot de passe invalide');
    }
}

inscription = () => {
    var email = document.querySelector("#emailInscription").value;
    var mdp = document.querySelector("#mdpInscription").value;
    var confMdp = document.querySelector("#confMdpInscription").value;

    if (mdp === confMdp) {
        const user = {email, mdp};

        localStorage.setItem(email, JSON.stringify(user));
        alert('Inscription réussie');
    } else {
        alert('Email ou mot de passe invalide');
    }
}