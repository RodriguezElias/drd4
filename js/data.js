let items;
let botonReservar;
let contador = 0;
let carrito = {};

/* Funcion para traer los datos del JSON */
const traerDatos = async () => {
  try {
    const res = await fetch("js/data.json");
    const data = await res.json();
    items = data;
    pintarDatos(items);
    agregarReservar();
  } catch (error) {
    console.log(error);
  }
};

/* Funcion renderizar datos en el HTML */
const pintarDatos = (datos) => {
  let contenedorItems = document.querySelector("#datos");
  datos.forEach((item) => {
    const items = document.createElement("div");
    items.classList.add("item");
    const itemImagen = document.createElement("img");
    itemImagen.setAttribute("src", item.imagen);
    itemImagen.classList.add("item-imagen");
    const itemTitulo = document.createElement("h4");
    itemTitulo.classList.add("titulo-encima");
    itemTitulo.textContent = `${item.titulo}`;
    const itemProvincia = document.createElement("p");
    itemProvincia.classList.add("region");
    itemProvincia.textContent = `${item.provincia}`;
    const itemRegion = document.createElement("p");
    itemRegion.classList.add("region");
    itemRegion.textContent = `${item.region}`;
    const itemDescripcion = document.createElement("p");
    itemDescripcion.classList.add("descripcion");
    itemDescripcion.textContent = `${item.descripcion}`;
    const itemPrecio = document.createElement("p");
    itemPrecio.classList.add("precio");
    itemPrecio.textContent = `${item.precio}`;
    const botonComprar = document.createElement("button");
    botonComprar.textContent = "Reservar";
    botonComprar.classList.add("boton-reservar");
    botonComprar.dataset.id = item.id;

    items.appendChild(itemImagen);
    items.appendChild(itemTitulo);
    items.appendChild(itemProvincia);
    items.appendChild(itemRegion);
    items.appendChild(itemDescripcion);
    items.appendChild(itemPrecio);
    items.appendChild(botonComprar);
    contenedorItems.appendChild(items);
  });
};

/* agregar eventos a todos los botones filter */
let filtros = document.querySelectorAll(".filter");
filtros.forEach((item) => {
  item.addEventListener("click", (e) => {
    filtrarDatos(e.target.value, items);
  });
});

/* Funcion filtrar los datos del json */
const filtrarDatos = (orden, array) => {
  if (orden == "all") {
    let listaOrdenada = array;
    let contenedorItems = document.querySelector("#datos");
    contenedorItems.innerHTML = "";
    pintarDatos(listaOrdenada);
  } else {
    let listaOrdenada = array.filter((prod) => prod.region === orden);
    let contenedorItems = document.querySelector("#datos");
    contenedorItems.innerHTML = "";
    pintarDatos(listaOrdenada);
  }
};
const agregarReservar = () => {
  let botonReservar = document.querySelectorAll(".boton-reservar");
  botonReservar.forEach((item) => {
    item.addEventListener("click", (e) => {
      setCarrito(e.target.parentElement);
    });
  });
};

const setCarrito = (obj) => {
  const item = {
    id: obj.querySelector(".boton-reservar").dataset.id,
    titulo: obj.querySelector(".titulo-encima").textContent,
    precio: obj.querySelector(".precio").textContent,
    imagen: obj.querySelector("img").getAttribute("src"),
    cantidad: 1,
  };
  const precioUnidad = Number(obj.querySelector(".precio").textContent);
  if (carrito.hasOwnProperty(item.id)) {
    item.cantidad = carrito[item.id].cantidad + 1;
    item.precio = item.cantidad * precioUnidad;
  }
  carrito[item.id] = { ...item };
  pintarCarrito();
  setContador();
};

const pintarCarrito = () => {
  const contenedorCarrito = document.querySelector(".lista-carrito");
  contenedorCarrito.innerHTML = "";
  Object.values(carrito).forEach((item) => {
    /* Contenedor item del carrito */
    const contenedorItemCarrito = document.createElement("div");
    contenedorItemCarrito.classList.add("item-carrito");
    /* Div contenedor de imagen */
    const contenedorImagenCarrito = document.createElement("div");
    contenedorImagenCarrito.classList.add("imagen-carrito");
    const imagenItemCarrito = document.createElement("img");
    imagenItemCarrito.setAttribute("src", item.imagen);
    contenedorImagenCarrito.appendChild(imagenItemCarrito);
    /* div Informacion del item */
    const contenedorItemInfo = document.createElement("div");
    contenedorItemInfo.classList.add("info-carrito");
    const tituloItem = document.createElement("p");
    tituloItem.textContent = item.titulo;
    const precioItem = document.createElement("p");
    precioItem.textContent = `Precio Total: $${item.precio}`;
    const cantidadItem = document.createElement("p");
    cantidadItem.textContent = `Cantidad: ${item.cantidad}`;
    contenedorItemInfo.appendChild(tituloItem);
    contenedorItemInfo.appendChild(precioItem);
    contenedorItemInfo.appendChild(cantidadItem);
    contenedorItemCarrito.appendChild(contenedorImagenCarrito);
    contenedorItemCarrito.appendChild(contenedorItemInfo);
    contenedorCarrito.appendChild(contenedorItemCarrito);
  });
  if (Object.keys(carrito).length > 0) {
    let resultadoTotal = 0;
    const contenedorMenuCarrito = document.createElement("div");
    const precioTotal = document.createElement("p");
    Object.values(carrito).forEach((item) => {
      resultadoTotal += Number(item.precio);
    });
    precioTotal.textContent = `Precio Total: $${resultadoTotal}`;
    const btnvaciarCarrito = document.createElement("button");
    btnvaciarCarrito.id = "vaciar-carrito";
    btnvaciarCarrito.classList.add("vaciar-carrito");
    btnvaciarCarrito.textContent = "Vaciar Carrito";
    btnvaciarCarrito.addEventListener("click", vaciarCarrito);
    contenedorMenuCarrito.appendChild(precioTotal);
    contenedorMenuCarrito.appendChild(btnvaciarCarrito);
    contenedorCarrito.appendChild(contenedorMenuCarrito);
  } else {
    contenedorCarrito.innerHTML= `<p class="carrito-vacio">EL CARRITO ESTA VACIO</p>`
  }
};
const setContador = () => {
  let sumContador = 0;
  Object.values(carrito).forEach((item) => {
    sumContador += item.cantidad;
  });
  pintarContador(sumContador);
};

const pintarContador = (cont) => {
  const spanContador = document.querySelector(".contador");
  spanContador.textContent = cont;
};

const vaciarCarrito = () => {
  carrito = {};
  pintarCarrito();
  pintarContador(0);
};
