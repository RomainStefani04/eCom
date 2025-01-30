window.addEventListener("scroll", () => {
    if (window.scrollY < 300) {
        document.querySelector(".navBar").style.top = "0px";
        document.querySelector(".navBar").style.position = "fixed";
    } else {
        document.querySelector(".navBar").style.top = "300px";
        document.querySelector(".navBar").style.position = "absolute";
    }
});