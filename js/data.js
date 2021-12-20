let items;
/* Funcion para traer los datos del JSON */
const traerDatos = async () => {
  try {
    const res = await fetch("js/data.json");
    const data = await res.json();
    items = data;
    pintarDatos();
  } catch (error) {
    console.log(error);
  }
};
const pintarDatos = () => {
  let contenedorItems = document.querySelector("#datos");
  items.forEach((item) => {
    const items = document.createElement("div")
    items.classList.add("item")
    const itemImagen = document.createElement("img")
    itemImagen.setAttribute('src', item.imagen)
    itemImagen.classList.add("item-imagen")
    const itemTitulo = document.createElement("h3")
    itemTitulo.textContent = `${item.titulo}`
    items.appendChild(itemImagen)
    items.appendChild(itemTitulo)
    contenedorItems.appendChild(items)
  })
}
// function recorrerListadoYRenderizarTarjetas() {
//   //data: data;
//   let tours = document.querySelector("#obtener-tour");
//   tours.addEventListener("click", () => {
//     console.log("hola");

//     let contenedor = document.querySelector("#fila");
//     productos.forEach((tour) => {
//       let templateTarjeta = `<div class="caja">
//       <img src=${tour.imagen} alt=${tour.titulo}>
//       <p class="info">${tour.titulo}</p>
//       <p class="info">Provincia: ${tour.provincia}</p>
//       <p class="info">Región: ${tour.region}</p>
//       <p class="info">Descripción: ${tour.descripcion}</p>
//       <p class="info">Precio: ${tour.precio}</p>
//     </div>`;
//       contenedor.innerHTML += templateTarjeta;
//     });
//   });
// }
