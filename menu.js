const boton = document.querySelector(".boton");
const menuMenu = document.querySelector(".menu-menu");

boton.addEventListener("click", ()=>{
    menuMenu.classList.toggle("menu-menu_visible");
})