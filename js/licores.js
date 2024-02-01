/* Esta lista podría ser reemplazada por la respuesta de un backend */
const licores = [
  {
    id:1,
    nombre: "Sixpack Costeña",
    precio: 11000,
  },
  {
    id:2,
    nombre: "Aguardiente Blanco",
    precio: 36000,
  },
  {
    id:3,
    nombre: "Ron Viejo de Caldas",
    precio: 80000,
  },
  {
    id:4,
    nombre: "Whisky Old Parr",
    precio: 160000,
  },
  {
    id:5,
    nombre: "Tequila Don Julio",
    precio: 230000,
  },
  {
    id:6,
    nombre: "Vodka Absolute",
    precio: 60000,
  }
]

document.addEventListener('DOMContentLoaded', () => {
  const mensaje = 'Licorera Super';
  const elemento = document.getElementById('miElemento');
  let indice = 0;

  function mostrarLetra() {
    elemento.textContent += mensaje[indice];
    indice++;

    if (indice < mensaje.length) {
      setTimeout(mostrarLetra, 100);
    }
  }

  console.log('Inicio del programa');
  setTimeout(mostrarLetra, 1000);
  console.log('Fin del programa');
});
