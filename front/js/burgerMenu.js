window.addEventListener('load', () => {
    ajouterBurgerMenu()
});

ajouterBurgerMenu = () => {
    var burgerMenu = document.createElement('div');
    burgerMenu.className = 'burgerMenu';
    burgerMenu.id = 'burgerMenu';
    
    var burgerMenuIcon = document.createElement('div');
    burgerMenuIcon.className = 'burgerMenuIcon';
    var bar1 = document.createElement('div');
    bar1.className = 'bar';
    burgerMenuIcon.appendChild(bar1);
    var bar2 = document.createElement('div');
    bar2.className = 'bar';
    burgerMenuIcon.appendChild(bar2);
    var bar3 = document.createElement('div');
    bar3.className = 'bar';
    burgerMenuIcon.appendChild(bar3);

    burgerMenuIcon.addEventListener('click', () => {
        burgerMenuIcon.classList.contains('active') ? closeMenu() : openMenu();
    });

    burgerMenu.appendChild(burgerMenuIcon);

    document.querySelector(".navBar").appendChild(burgerMenu);
}

openMenu = () => {
    var burgerMenu = document.querySelector("#burgerMenu");
    burgerMenu.querySelector(".burgerMenuIcon").classList.add('active');
    document.querySelector(".sideMenu").classList.add('show');
}

closeMenu = () => {
    var burgerMenu = document.querySelector("#burgerMenu");
    burgerMenu.querySelector(".burgerMenuIcon").classList.remove('active');
    document.querySelector(".sideMenu").classList.remove('show');
}