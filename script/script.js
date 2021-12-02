let menu = document.querySelector(".header__menu");
let mobileMenu = document.querySelector(".mobileMenu");
let exit = document.querySelector(".mobileMenu__exit");
let menuLi = document.querySelector(".mobileMenu__menu");

function openMenu() {
    mobileMenu.classList.add("mobileMenu_open");
}

function closedMenu() {
    mobileMenu.classList.remove("mobileMenu_open");
}


menu.addEventListener("click", openMenu);
exit.addEventListener("click", closedMenu);
menuLi.addEventListener("click", closedMenu);