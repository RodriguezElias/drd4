
let fs = require('fs');
let dataJSON = fs.readFileSync(__dirname + '/data.json', 'UTF-8');
let data = JSON.parse(dataJSON)
console.log(data); 

let contador = 0;
function recorrerListadoYRenderizarTarjetas() {
  data : data;
  let tours = document.querySelector("obtener-tour");
  tours.addEventListener("click", function (event) {
    contador++
    if (contador == 1) {
      let contenedor = document.getElementById("fila");
      data.forEach(tour => {
      let templateTarjeta =
          `<div class="caja">
      <img src=${tour.imagen} alt=${tour.titulo}>
      <p class="info">${tour.titulo}</p>
      <p class="info">Provincia: ${tour.provincia}</p>
      <p class="info">Región: ${tour.region}</p>
      <p class="info">Descripción: ${tour.descripcion}</p>
      <p class="info">Precio: ${tour.precio}</p>
    </div>`;
        contenedor.innerHTML += templateTarjeta;
      })
    } else {
      event.preventDefault();
   }
  })
}
recorrerListadoYRenderizarTarjetas(); 



