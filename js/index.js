const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en licores.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoLicor = document.createElement("div");
    nuevoLicor.classList = "tarjeta-producto"
    nuevoLicor.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Licor 1"> 
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoLicor);
    nuevoLicor.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(licores);

// prueba api

const listaProductos = document.querySelector("#lista-productos");

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        mostrarProductos(data);
    })

    .catch(error => {
      console.error('Error en la solicitud:', error);
    });

function mostrarProductos(productos) {
    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerText = producto.nombre + " - $" + producto.precio;
        listaProductos.append(li);
    });
}

