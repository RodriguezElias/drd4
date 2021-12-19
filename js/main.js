window.onload = () => {
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 150) {
      document.querySelector("#nav").classList.add("is-scrolling");
    } else {
      document.querySelector("#nav").classList.remove("is-scrolling")
    }
  });
};

/* Funcion abrir carrito */
const carrito = document.querySelector("#carrito")
const menuCarrito = document.querySelector('.menu-cart');
carrito.addEventListener("click", ()=>{
  menuCarrito.style.right = '0';
})

/* Funcion cerrar carrito */
const iconoCerrar = document.querySelector("#cerrar")
iconoCerrar.addEventListener("click",()=>{
  menuCarrito.style.right = '-100%';

})