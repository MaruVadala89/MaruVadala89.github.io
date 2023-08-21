function ADondeVamos() {
    do {
    let restaurante;
    let comida = prompt("¿Que comida te haria feliz hoy? Las opciones son:\n - Sushi \n - Pasta\n - Pizza\n - Ceviche\n - Ramen\n - Ramen");

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
