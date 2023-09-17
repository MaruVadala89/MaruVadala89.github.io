function agregarAlCarrito(id) {
   
if (carrito.some((el) => el.id === id)) { /*Verificamos si la planta esta en el carrito*/ 
    let index = carrito.findIndex(el => el.id === id); /*Si esta, busca en que posicion esta, y agregale una unidad mas*/ 
    carrito[index].cantidad += 1;
} else {
    
    let productoAAgregar = plantas.find((el) => el.id === id); /*Si no esta, busca la planta y agregale una unidad*/
    carrito.push({
        ...productoAAgregar,
        cantidad: 1,
    });
}
  
}

function mostrarCarrito () {
let divCarrito = document.getElementById ("cart");
divCarrito.innerHTML = ""; /*Limpio el carrito, para que no se muestren indefinidamente productos en la pagina*/
carrito.forEach(el => {  
    
    let card = document.createElement("div");
    card.className = "product-card";

    let title = document.createElement("h3");
    title.innerText = `Nombre: ${el.nombre}`;

    card.appendChild(title);

    let price = document.createElement("p");
    price.innerText = `Precio: $${el.precio}`;

    card.appendChild(price);

    let divCantidad = document.createElement("div");
    let menos = document.createElement ("button")
    menos.innerText = "-"
    let cantidad = document.createElement ("p")
    cantidad.innerText = `Cantidad: ${el.cantidad}`
    let mas = document.createElement ("button")
    mas.innerText = "+"





    divCarrito.appendChild(card);

})

}

function ocultarCarrito () {

}

function modificarCarrito () {}

function limpiarCarrito () {console.log ("mostrar");}

function finalizarCompra () {}





