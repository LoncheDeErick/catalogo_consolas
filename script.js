const consolas = [
  {
    nombre: "Play Station 5",
    descripcion: "Es una consola de videojuegos de Sony conocida por su velocidad y gráficos avanzados.",
    precio: 758,
    imagen: "img/play.jpg",
    link: "https://www.amazon.com.mx/PlayStation-Paquete-consola-PS5-Turismo/dp/B0FDD92JWX/ref=asc_df_B0FDD92JWX?mcid=0a1a2558dfe73488b9758609ba02ce66&tag=gledskshopmx-20&linkCode=df0&hvadid=742812198718&hvpos=&hvnetw=g&hvrand=8575191934504032259&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9135042&hvtargid=pla-2470152903084&psc=1&language=es_MX&gad_source=1"
  },
  {
    nombre: "Xbox Series S",
    descripcion: "Una consola compacta y solo digital que destaca por su precio asequible y su enfoque en juegos en la nube, con un rendimiento de hasta 1440p a 120 FPS.",
    precio: 481,
    imagen: "img/series.jpg",
    link: "https://www.amazon.com.mx/Consola-Xbox-512-Microsoft-Videojuego/dp/B0DG6G4WST/ref=asc_df_B0DG6G4WST?mcid=ca4b24b47a703a668d601492ee1d1264&tag=gledskshopmx-20&linkCode=df0&hvadid=709846429611&hvpos=&hvnetw=g&hvrand=10144678710127403811&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9073855&hvtargid=pla-2396066086035&psc=1&language=es_MX&gad_source=1"
  },
  {
    nombre: "Xbox Series X",
    descripcion: "Es la consola de juegos más potente de Microsoft, destacada por su procesador de 8 núcleos, GPU de 12 teraflops y su arquitectura",
    precio: 812,
    imagen: "img/xbox.jpeg",
    link: "https://www.amazon.com.mx/Consola-Xbox-X-1-TB/dp/B08H75RTZ8/ref=asc_df_B08H75RTZ8?mcid=24d7976d416433008d710be5f0ee216d&tag=gledskshopmx-20&linkCode=df0&hvadid=709846429623&hvpos=&hvnetw=g&hvrand=595373609889528686&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9073855&hvtargid=pla-1158386393975&psc=1&language=es_MX&gad_source=1"
  },
  {
    nombre: "Nintendo Switch 2",
    descripcion: "Es una consola de videojuegos lanzada el 5 de junio de 2025, sucesora de la Nintendo Switch, que cuenta con mejoras significativas en hardware",
    precio: 677,
    imagen: "img/switch.jpeg",
    link: "https://www.amazon.com.mx/Nintendo-SwitchTM-Mario-KartTM-Bundle/dp/B0F5TD7BK7/ref=asc_df_B0F5TD7BK7?mcid=8480f6fb715c3d4bbd43097c67df05b3&tag=gledskshopmx-20&linkCode=df0&hvadid=742812198718&hvpos=&hvnetw=g&hvrand=7650661479180691840&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9073855&hvtargid=pla-2427587544878&psc=1&language=es_MX&gad_source=1"
  }
];

function formatoPrecio(valor) {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "USD"
  });
}

const catalogo = document.getElementById("catalogo");
const plantilla = document.getElementById("tarjeta-template");

consolas.forEach(cons => {
  const clone = plantilla.content.cloneNode(true);
  clone.querySelector(".imagen").src = cons.imagen;
  clone.querySelector(".imagen").alt = cons.nombre;
  clone.querySelector(".titulo").textContent = cons.nombre;
  clone.querySelector(".descripcion").textContent = cons.descripcion;
  clone.querySelector(".precio").textContent = formatoPrecio(cons.precio);

  const boton = clone.querySelector(".boton");
  boton.addEventListener("click", () => {
    window.open(cons.link, "_blank");
  });

  catalogo.appendChild(clone);
});

