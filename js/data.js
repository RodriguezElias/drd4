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
    const itemTitulo = document.createElement("h4")
    itemTitulo.classList.add("titulo-encima")
    itemTitulo.textContent = `${item.titulo}`
    const itemProvincia = document.createElement("p")
    itemProvincia.classList.add("region")
    itemProvincia.textContent = `${item.provincia}`
    const itemRegion = document.createElement("p")
    itemRegion.classList.add("region")
    itemRegion.textContent = `${item.region}`
    const itemDescripcion = document.createElement("p")
    itemDescripcion.classList.add("descripcion")
    itemDescripcion.textContent = `${item.descripcion}`
    const itemPrecio = document.createElement("p")
    itemPrecio.classList.add("precio")
    itemPrecio.textContent = `${item.precio}`;
    items.appendChild(itemImagen)
    items.appendChild(itemTitulo)
    items.appendChild(itemProvincia)
    items.appendChild(itemRegion)
    items.appendChild(itemDescripcion)
    items.appendChild(itemPrecio)
    contenedorItems.appendChild(items)

  })
}

$('#cuyo').on('click', function() {
  if( $(this).is(':cuyo') ){
      //  checkbox ha sido seleccionado
      propsSelected.push( $(this).val())
 
  } else {
      //  checkbox ha sido deseleccionado
      
      propsSelected = propsSelected.filter(item =>item !== $(this).val() ) 
  }
  console.log(propsSelected)
});
