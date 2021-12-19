/* let fs = require('fs');
let dataJSON = fs.readFileSync(__dirname + '../data/data.json', 'UTF-8');
let data = JSON.parse(dataJSON);
console.log(data); */

const data = [{
   imagen: "https://www.lavoz.com.ar/resizer/09pkdAjAI-SNXZrPuIExbbxCM_g=/1023x683/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/LITZY2EINZAZZC4OSCM5QNAREE.jpg",   
   titulo: "Mar chiquita",
   provincia: "Córdoba",
   region: "Centro",
 },
 {
   imagen: "https://www.lavoz.com.ar/resizer/09pkdAjAI-SNXZrPuIExbbxCM_g=/1023x683/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/LITZY2EINZAZZC4OSCM5QNAREE.jpg",   
   titulo: "Mar chiquita",
   provincia: "Córdoba",
   region: "Centro",
 },
 {
   imagen: "https://www.lavoz.com.ar/resizer/09pkdAjAI-SNXZrPuIExbbxCM_g=/1023x683/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/LITZY2EINZAZZC4OSCM5QNAREE.jpg",   
   titulo: "Mar chiquita",
   provincia: "Córdoba",
   region: "Centro",
 },
];



let contador = 0;
function recorrerListadoYRenderizarTarjetas() {
  let tours = document.querySelector("#obtener-tour");
  tours.addEventListener("click", function (event) {
    contador++
    if (contador == 1) {
      let contenedor = document.getElementById("fila");
      data.forEach(tour => {
      let templateTarjeta =
          `<div class="caja">
      <img src=${tour.imagen} alt=${tour.titulo}>
      <p class="lenguajes">${tour.titulo}</p>
      <p class="lenguajes">Provincia: ${tour.provincia}</p>
      <p class="lenguajes">Región: ${tour.region}</p>
    </div>`;
        contenedor.innerHTML += templateTarjeta;
      })
    } else {
      event.preventDefault();
   }
  })
}
recorrerListadoYRenderizarTarjetas();

