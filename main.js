let containerDeProductos = document.getElementById("containerDeProductos");

plantas.forEach((el,index) => {
    let card = document.createElement("div");
    card.className = "product-card";

    let title = document.createElement("h3");
    title.innerText = `Nombre: ${el.nombre}`;

    card.appendChild(title);

    let price = document.createElement("p");
    price.innerText = `Precio: $${el.precio}`;

    card.appendChild(price);

    let buttonAdd = document.createElement("button");
    buttonAdd.innerText = `Agregar al carrito`;
    buttonAdd.className = "btn-secundario";

    buttonAdd.onclick = () => agregarAlCarrito(el.id)

    card.appendChild(buttonAdd);

    containerDeProductos.appendChild(card);

});

let carrito = [];




let btnMostrar = document.getElementById ("btnMostrar");
let btnOcultar = document.getElementById ("btnOcultar");
let btnLimpiar = document.getElementById ("btnLimpiar");


btnMostrar.onclick = mostrarCarrito; 
btnOcultar.onclick = ocultarCarrito;
btnLimpiar.onclick = limpiarCarrito;





































