/*LIST CARDS*/
const listadoCartas = [
    {
        
        id: 1,
        nombre: "xxxtentacion",
        imagen: "./imagenes/xxxtentacion.jpeg",
        descripcion: "TOP 1: rip roach ",
        url:"https://youtu.be/aFOxVm3Z9x8"
    },
    {
        id: 2,
        nombre: "litkillah",
        imagen: "./imagenes/litkilla.jpeg",
        descripcion: "TOP 2:bzrp freestyle session #3' ",
        url:"https://youtu.be/ZgDFaniuwQc"
    },
    {
        id: 3,
        nombre: "YSY A",
        imagen: "./imagenes/YSY.A.jpeg",
        descripcion: "TOP 3: linaje! ",
        url:"https://youtu.be/3z4xVMDBduE"
    },
    {
        id: 4,
        nombre: "duki",
        imagen: "./imagenes/duki.jpeg",
        descripcion: "TOP 4: she don't give a fo' ",
        url:"https://youtu.be/W0yp3rSfx3I"
    },
    {
        id: 5,
        nombre: "Eminem",
        imagen: "./imagenes/eminem.jpeg",
        descripcion: "TOP 5: superman' ",
        url:"https://youtu.be/8kYkciD9VjU"
    },
    {
        id: 6,
        nombre: "LA 12",
        imagen: "./imagenes/la12.jpg",
        descripcion: "TOP 6: cuando vas a la cancha' ",
        url:"https://youtu.be/aGR8_tTaWqg"
    },
]
/* Selección de los NODOS HTML (etiquetas/elementos html)*/
const contenedorCartas = document.querySelector(".listadoCartas")
/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
    <article class="card">
        <a href=${carta.url}>
            <img src=${carta.imagen} alt="Imagen del proyecto">
        </a>
        <div class="info">
            <h2>${carta.nombre}</h2>
            <p>${carta.descripcion}</p>
        </div>
    </article>`
)



