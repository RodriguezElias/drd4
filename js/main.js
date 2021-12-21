window.onload = () => {
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 150) {
      document.querySelector("#nav").classList.add("is-scrolling");
    } else {
      document.querySelector("#nav").classList.remove("is-scrolling")
    }
  });
  traerDatos();
  pintarContador(contador);
};

/* Funcion abrir carrito */
const botonCarrito = document.querySelector("#carrito")
const menuCarrito = document.querySelector('.menu-cart');
botonCarrito.addEventListener("click", ()=>{
  menuCarrito.style.right = '0';
})

/* Funcion cerrar carrito */
const iconoCerrar = document.querySelector("#cerrar")
iconoCerrar.addEventListener("click",()=>{
  menuCarrito.style.right = '-100%';
})
