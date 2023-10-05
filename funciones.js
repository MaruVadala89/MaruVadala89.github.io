async function agregarAlCarrito(id) {
    const response = await fetch("datos.json");
    const productos = await response.json();


    if (carrito.some((el) => el.id === id)) {
        let index = carrito.findIndex(el => el.id === id);
        carrito[index].cantidad += 1;
    } else {
        let productoAAgregar = productos.find((el) => el.id === id);
        carrito.push({
            ...productoAAgregar,
            cantidad: 1,
        });
    }
    Toastify({

        text: "Adoptaste una planta!",
        duration: 3000,
        style: { background: "linear-gradient(to right, #00b09b, #96c93d)" },
    }).showToast();

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();

};

function mostrarCarrito() {

    let divCarrito = document.getElementById("cart");
    let carritoContainer = document.getElementById ("carritoContainer");
    divCarrito.innerHTML = "";
    
    if (carrito.length === 0) {
        carritoContainer.style.display = "none";
    } else {
        carritoContainer.style.display = "block";
    }

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

        let menos = document.createElement("button");
        menos.innerText = "-"
        menos.onclick = () => modificarCarrito(index, "-");

        let cantidad = document.createElement("p");
        cantidad.innerText = `Cantidad: ${el.cantidad}`

        let mas = document.createElement("button");
        mas.innerText = "+"
        mas.onclick = () => modificarCarrito(index, "+");

        let quitar = document.createElement("button");
        quitar.innerText = "Quitar"
        quitar.onclick = () => eliminarProducto(index);

        card.appendChild(quitar);



        divCantidad.appendChild(menos);
        divCantidad.appendChild(cantidad);
        divCantidad.appendChild(mas);
        divCantidad.appendChild(quitar);

        card.appendChild(divCantidad);

        divCarrito.appendChild(card);
    })
}

function modificarCarrito(index, op) {
    if (op === "-") {
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad -= 1;
        } else {
            carrito.splice(index, 1)
        }
    } else {
        carrito[index].cantidad += 1;
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}



function ocultarCarrito() {
    let divCarrito = document.getElementById("cart");
    divCarrito.innerHTML = "";
} 


function limpiarCarrito() {

    Swal.fire({
        title: '¿Está seguro de eliminar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {

        if (result.isConfirmed) {
            carrito = [];
            localStorage.setItem("carrito", JSON.stringify(carrito))

            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El carrito ha sido borrado'
            })

            mostrarCarrito();
        };
    })
}

function finalizarCompra() {
    let precioTotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);




    Swal.fire({
        title: 'Compra Finalizada',
        html: `Gracias por tu compra! <br>Precio Total: $${precioTotal}`,
        text: '!Gracias por adoptar una plantita!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Pagar',
        cancelButtonText: 'Mejor mas tarde'

    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito();
        } else {
            mostrarCarrito();
        }

    });
}