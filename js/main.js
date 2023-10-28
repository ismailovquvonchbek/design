const elButton = document.querySelector(".btn");
const elButtonMenu = document.querySelector(".menu");
const elButtonExit = document.querySelector(".exit");
const elHeader = document.querySelector(".header__list");


elButton.addEventListener("click", ()=> {
   
    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    elHeader.classList.toggle(".header__blok")
})

