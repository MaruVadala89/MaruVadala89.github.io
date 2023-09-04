const productos = [
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
        stock: 34,
        
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
        stock: 1,
         },

    {
        id: 1010,
        nombre: "Pensamiento",
        deExterior: true,
        deInterior: false,
        precio: 400,
        stock: 60,
        
    },

];

class producto {

    constructor (id, nombre, deExterior, deInterior, precio, stock)
    {
        this.id = id
        this.nombre = nombre
        this.deExterior = deExterior
        this.deInterior = deInterior
        this.precio = precio
        this.stock = stock 

    }

}

let opcion; 

    do { opcion = prompt ("Ingrese una opcion:\n\n1. Ver todas las plantas\n2.Ver plantas de interior\n3.Ver plantas de exterior\n4. Ver plantas en stock\n\n pulse 0 para salir")

    switch (opcion) {

        case "0":
            
    }


    }






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