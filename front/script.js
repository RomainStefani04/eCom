window.addEventListener("scroll", () => {
    var ymax = 300
    if (window.scrollY < ymax) {
        document.querySelector(".navBar").style.top = "0px";
        document.querySelector(".navBar").style.position = "fixed";
    } else {
        document.querySelector(".navBar").style.top = ymax + "px";
        document.querySelector(".navBar").style.position = "absolute";
    }
});