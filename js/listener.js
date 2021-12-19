const tourBtn = document.querySelector("#obtener-tour");
const verMasBtn = document.querySelector("#ver-más");

tourBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
verMasBtn.addEventListener("mouseenter", mostrarYOcultarDescripcionCompleta);
verMasBtn.addEventListener("mouseleave", mostrarYOcultarDescripcionCompleta);