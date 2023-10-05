let containerDeProductos = document.getElementById("containerDeProductos");


async function cargarProductos() {

    containerDeProductos.innerHTML = "";

    const response = await fetch("datos.json");
    const data = await response.json();

    data.forEach((el, index) => {

        let card = document.createElement("div");
        card.className = "product-card";

        let img = document.createElement("img");
        img.src = `img/${el.id}-${el.deInterior ? 'interior' : 'exterior'}-${el.nombre.toLowerCase()}.jpg`;
        img.alt = `Imagen de ${el.nombre}`;
        card.appendChild(img);

        let title = document.createElement("h3");
        title.innerText = `Nombre: ${el.nombre}`;
        title.className = "title";
        
        card.appendChild(title);

        let price = document.createElement("p");
        price.innerText = `Precio: $${el.precio}`;
        price.className = "price";

        card.appendChild(price);

        let buttonAdd = document.createElement("button");
        buttonAdd.innerText = `Agregar al carrito`;
        buttonAdd.className = "btn-secundario";

        buttonAdd.onclick = () => agregarAlCarrito(el.id)

        card.appendChild(buttonAdd);

        containerDeProductos.appendChild(card);

    });

}

cargarProductos();

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

let btnMostrar = document.getElementById("btnMostrar");
let btnOcultar = document.getElementById("btnOcultar");
let btnLimpiar = document.getElementById("btnLimpiar");
let btnFinalizar = document.getElementById("btnFinalizar");


btnMostrar.onclick = mostrarCarrito;
btnOcultar.onclick = ocultarCarrito;
btnLimpiar.onclick = limpiarCarrito;
btnFinalizar.onclick = finalizarCompra;





































