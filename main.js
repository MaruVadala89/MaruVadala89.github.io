const plantas = [
    {
        id: "(est)",
        nombre: "Estrella Federal",
        deInterior: true,
        deExterior: false,
        precio: 2930,
        stock: 5,

    },
    {
        id: "(fic)",
        nombre: "Ficus Pandurata",
        deInterior: true,
        deExterior: false,
        precio: 10800,
        stock: 30,

    },
    {
        id: "(mon)",
        nombre: "Monstera",
        deInterior: true,
        deExterior: false,
        precio: 7080,
        stock: 5,
    },

    {
        id: "(pep)",
        nombre: "Peperomia Tricolor",
        deInterior: true,
        deExterior: false,
        precio: 1884,
        stock: 2,
    },

    {
        id: "(pal)",
        nombre: "Palo de Agua",
        deInterior: true,
        deExterior: false,
        precio: 1800,
        stock: 0,
    },
    {
        id: "(gaza)",
        nombre: "Gazania",
        deExterior: true,
        deInterior: false,
        precio: 358,
        stock: 15,
    },
    {
        id: "(lazo)",
        nombre: "Lazo del Amor",
        deExterior: true,
        deInterior: false,
        precio: 222,
        stock: 30,
    },
    {
        id: "(jaz)",
        nombre: "Jazmin Kimura",
        deExterior: true,
        deInterior: false,
        precio: 1584,
        stock: 5,
    },

    {
        id: "(aga)",
        nombre: "Agapantos Flor Blanca ",
        deExterior: true,
        deInterior: false,
        precio: 3965,
        stock: 0,
    },
    {
        id: "(pen)",
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
    opcion = prompt("¿Que planta queres adoptar hoy?. Ingresa una opción:\n\n1. Ver todas las plantas\n2.Ver plantas de interior\n3.Ver plantas de exterior\n4. Ver plantas en stock\n\n pulse 0 para salir")

    switch (opcion) {

        case "0":
            alert("Gracias por visitarnos. ¡Te esperamos pronto!")
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
            break
    }

} while (opcion !== "0")

function nuevoMensaje(lista, mensajeInicial) {

    let mensaje = mensajeInicial;

    lista.forEach((el) => { 
        mensaje += `${el.id} - ${el.nombre} - Precio: $${el.precio}\n` });

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
    let mensaje = nuevoMensaje (plantasDeInterior, "Estas son nuestras plantas de interior: \n\n");
    alert(mensaje);
}


function verTodasLasDeExterior ()
{
    let plantasDeExterior = plantas.filter((el) => el.deExterior);
    let mensaje = nuevoMensaje (plantasDeExterior, "Estas son nuestras plantas de Exterior: \n\n");
    alert(mensaje);
}

function verPlantasEnStock ()
{
    let plantasEnStock = plantas.filter ((el) => el.stock !== 0);
    let mensaje = nuevoMensaje (plantasEnStock, "Estas son nuestras planta en stock: \n\n")
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