function ADondeVamos() {
    let restaurante;
    let comida = prompt("¿Que comida te haria feliz hoy?");

    do {

        if (comida === null) {

            alert("Cancelaste el pedido de recomendacion"); return;

        }

        else if (comida === "sushi") {
            restaurante = "Tokin";
        }

        else if (comida === "pasta") {
            restaurante = "San Pietro"
        }

        else if (comida === "pizza") {
            restaurante = "Il Forno de Marco";
        }

        else if (comida === "ceviche") {
            restaurante = "Sabores del peru";
        }

        else if (comida === "ramen") {
            restaurante = "Nakama";
        }

        else if (comida === "empanadas") {
            restaurante = "La Vieja Esquina";
        }

        else {
            alert("No conozco un restaurante para esa comida, proximamente cargaremos nuevos lugares"); return;
        }

    } while (!restaurante);


    alert("Te recomiendo ir a  " + restaurante + " para comer:  " + comida); return;

}


ADondeVamos();
