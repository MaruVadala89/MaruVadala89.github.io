function ADondeVamos() 

{

    let restaurante;
    const comida = prompt("¿Que comida te haria feliz hoy?");
    console.log (comida)

        do 
        
        {  
    
            if (comida == "sushi") {
                restaurante = "Tokin";
            }

            else if (comida == "pasta") {
                restaurante = "San Pietro"
            }

            else if (comida == "pizza") {
                restaurante = "Il Forno de Marco";
            }

            else if (comida == "comida peruana") {
                restaurante = "Sabores del peru"
            }

            else {
                alert("No conozco un restaurante para esa comida, proximamente cargaremos nuevos lugares")
            }

        } while (!restaurante);

        console.log ("Te recomiendo ir a  " + restaurante + " para comer la/el mejor " + comida);

    }

  

    ADondeVamos();
