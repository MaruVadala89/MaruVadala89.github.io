
function agregarAlCarrito(id) {
    if (carrito.some((el) => el.id === id)) {
        let index = carrito.findIndex(el => el.id === id);  
        carrito[index].cantidad += 1;
    } else {
        let productoAAgregar = plantas.find((el) => el.id === id);
        carrito.push({
            ...productoAAgregar,
            cantidad: 1,
        });
    }

    mostrarCarrito ();
};


function mostrarCarrito () {

let divCarrito = document.getElementById("cart");

divCarrito.innerHTML = ""; 

carrito.forEach((el, index) => {  
    
    let card = document.createElement("div");
    card.className = "product-card";

    let title = document.createElement("h3");
    title.innerText = `Nombre: ${el.nombre}`;

    card.appendChild(title);

    let price = document.createElement("p");
    price.innerText = `Precio: $${el.precio}`;

    card.appendChild(price);

    let divCantidad = document.createElement("div");
    divCantidad.className = "div-cantidad"

    let menos = document.createElement ("button");
    menos.innerText = "-"

    menos.onclick = () => modificarCarrito (index, "-");

    let cantidad = document.createElement ("p");
    cantidad.innerText = `Cantidad: ${el.cantidad}`

    let mas = document.createElement ("button");
    mas.innerText = "+"

    mas.onclick = () => modificarCarrito (index, "+");

    divCantidad.appendChild(menos);
    divCantidad.appendChild(cantidad);
    divCantidad.appendChild(mas);

    card.appendChild(divCantidad);

    divCarrito.appendChild(card); })

}

function ocultarCarrito () {
}

function limpiarCarrito () {
}



function modificarCarrito (index, op) {
    if (op === "-") {
        carrito[index].cantidad -= 1;
    } else {
        carrito[index].cantidad += 1;
    };

    mostrarCarrito();
};








