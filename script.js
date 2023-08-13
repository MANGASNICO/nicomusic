/*LIST CARDS*/
const listadoCartas = [
    {
        
        id: 1,
        nombre: "xxxtentacion",
        imagen: "./imagenes/xxxtentacion.jpeg",
        descripcion: "TOP 1: rip roach ",
    },
    {
        id: 2,
        nombre: "litkillah",
        imagen: "./imagenes/litkilla.jpeg",
        descripcion: "TOP 2:bzrp freestyle session #3' ",
    },
    {
        id: 3,
        nombre: "travis scott",
        imagen: "./imagenes/travisscott.jpeg",
        descripcion: "TOP 3: who? what! ",
    },
    {
        id: 4,
        nombre: "duki",
        imagen: "./imagenes/duki.jpeg",
        descripcion: "TOP 4: she don't give a fo' ",
    },
    {
        id: 5,
        nombre: "Eminem",
        imagen: "./imagenes/eminem.jpeg",
        descripcion: "TOP 5: superman' ",
    },
]
/* Selección de los NODOS HTML (etiquetas/elementos html)*/
const contenedorCartas = document.querySelector(".listadoCartas")
/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
    <article class="card">
        <img src=${carta.imagen} alt="Imagen del proyecto">
        <div class="info">
            <h2>${carta.nombre}</h2>
            <p>${carta.descripcion}</p>
        </div>
    </article>`
)



