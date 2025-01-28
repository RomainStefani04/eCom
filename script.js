window.onload = () => {
    ajouterBurgerMenu()
}

ajouterBurgerMenu = () => {
    var burgerMenu = document.createElement('div');
    burgerMenu.className = 'burger-menu';
    var bar1 = document.createElement('div');
    bar1.className = 'bar';
    burgerMenu.appendChild(bar1);
    var bar2 = document.createElement('div');
    bar2.className = 'bar';
    burgerMenu.appendChild(bar2);
    var bar3 = document.createElement('div');
    bar3.className = 'bar';
    burgerMenu.appendChild(bar3);

    document.querySelector(".navButtons").appendChild(burgerMenu);
}