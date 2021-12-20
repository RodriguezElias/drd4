
let items;
/* Funcion para traer los datos del JSON */
const traerDatos = async () => {
  try {
    const res = await fetch("js/data.json");
    const data = await res.json();
    console.log(data);
    items = data;
  } catch (error) {
    console.log(error);
  }
};

let contador = 0;
function recorrerListadoYRenderizarTarjetas() {
  let tours = document.querySelector("obtener-tour");
  tours.addEventListener("click", function (event) {
    contador++
    if (contador == 1) {
      let contenedor = document.getElementById("fila");
      items.forEach(item => {
      let templateTarjeta =
          `<div class="caja">
      <img src=${item.imagen} alt=${item.titulo}>
      <p class="info">${item.titulo}</p>
      <p class="info">Provincia: ${item.provincia}</p>
      <p class="info">Región: ${item.region}</p>
      <p class="info">Descripción: ${item.descripcion}</p>
      <p class="info">Precio: ${item.precio}</p>
    </div>`;
        contenedor.innerHTML += templateTarjeta;
      })
    } else {
      event.preventDefault();
   }
  })
}
recorrerListadoYRenderizarTarjetas(); 


