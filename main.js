const plantas = [
    {
        id: 111,
        nombre: "Estrella Federal",
        deInterior: true,
        deExterior: false,
        precio: 2.930,
        stock: 5,

    },
    {
        id: 222,
        nombre: "Ficus Pandurata",
        deInterior: true,
        deExterior: false,
        precio: 10.800,
        stock: 30,

    },
    {
        id: 333,
        nombre: "Monstera",
        deInterior: true,
        deExterior: false,
        precio: 7.080,
        stock: 5,
    },

    {
        id: 444,
        nombre: "Peperomia Tricolor",
        deInterior: true,
        deExterior: false,
        precio: 1.884,
        stock: 2,
    },

    {
        id: 555,
        nombre: "Palo de Agua",
        deInterior: true,
        deExterior: false,
        precio: 1.800,
        stock: 0,
    },
    {
        id: 666,
        nombre: "Gazania",
        deExterior: true,
        deInterior: false,
        precio: 358,
        stock: 15,
    },
    {
        id: 777,
        nombre: "Lazo del Amor",
        deExterior: true,
        deInterior: false,
        precio: 222,
        stock: 30,
    },
    {
        id: 888,
        nombre: "Jazmin Kimura",
        deExterior: true,
        deInterior: false,
        precio: 1.584,
        stock: 5,
    },

    {
        id: 999,
        nombre: "Agapantos Flor Blanca ",
        deExterior: true,
        deInterior: false,
        precio: 3.965,
        stock: 0,
    },
    {
        id: 1010,
        nombre: "Pensamiento",
        deExterior: true,
        deInterior: false,
        precio: 400,
        stock: 0,
    },

];

class planta {

    constructor(id, nombre, deExterior, deInterior, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.deExterior = deExterior
        this.deInterior = deInterior
        this.precio = precio
        this.stock = stock

    }

}

let opcion;

do {
    opcion = prompt("Ingrese una opcion:\n\n1. Ver todas las plantas\n2.Ver plantas de interior\n3.Ver plantas de exterior\n4. Ver plantas en stock\n\n pulse 0 para salir")

    switch (opcion) {

        case "0":
            alert("Gracias por su visita. Vuelva pronto")
            break
        case "1":
            verTodasLasPlantas()
            break
        case "2":
            verTodasLasDeInterior()
            break
        case "3":
            verTodasLasDeExterior()
            break
        case "4":
            verPlantasEnStock()
            break
        default:
            alert("No es una opcion valida. Ingrese una de las opciones indicadas")
            breake
    }

} while (opcion !== "0")

function nuevoMensaje(lista, mensajeInicial) {

    let mensaje = mensajeInicial;

    lista.forEach((el) => { mensaje += `${el.id})  ${el.nombre} - Precio: $${el.precio}` });

    return mensaje;

} 

function verTodasLasPlantas ()
{
    let mensaje = nuevoMensaje (plantas, "Estas son todas nuestras plantas: \n\n")
    alert(mensaje);
}

function verTodasLasDeInterior ()
{
    let plantasDeInterior = plantas.filter((el) => el.deInterior);
    let mensaje = nuevoMensaje (plantasDeInterior, "Estas son nuestras plantas de interior");
    alert(mensaje);
}


function verTodasLasDeExterior ()
{
    let plantasDeExterior = plantas.filter((el) => el.deExterior);
    let mensaje = nuevoMensaje (plantasDeExterior, "Estas son nuestras plantas de Exterior");
    alert(mensaje);
}

function verPlantasEnStock ()
{
    let plantasEnStock = plantas.filter ((el) => el.stock !== 0);
    let mensaje = nuevoMensaje (plantasEnStock, "Estas son nuestras planta en stock")
    alert(mensaje);
}









/*
function ADondeVamos() {
    do {
    let restaurante;
    let comida = prompt("¿Que comida te haria feliz hoy? Las opciones son:\n - Sushi \n - Pasta\n - Pizza\n - Ceviche\n - Ramen\n - Empanadas");

    if (comida === null) {

        alert("Cancelaste el pedido de recomendacion");
        return;
    }

    comida = comida.toLowerCase();

    switch (comida) {
        case "sushi":
            restaurante = "Tokin"
            break;
        case "pasta":
            restaurante = "San Pietro"
            break;
        case "pizza":
            restaurante = "Il Forno di Marco"
            break;
        case "ceviche":
            restaurante = "Sabores del Peru"
            break;
        case "ramen":
            restaurante = "Nakama"
            break;
        case "empanadas":
            restaurante = "La Vieja Esquina"
            break;
        default:
            alert("No conozco un restaurante para esa comida, próximamente cargaremos nuevos lugares"); 
            continue; 
        }


    const continuar = confirm("Te recomiendo ir a " + restaurante + " para comer: " + comida + "\n\n¿Deseas otra recomendacion?"); 
    
        if(!continuar) {
            break;
        }

    } while (true);
    
}


ADondeVamos();
*/