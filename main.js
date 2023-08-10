function ADondeVamos () {

do {
    const comida = prompt ("¿Que comida te haria feliz hoy?");
    let restaurante;

    if (comida === "sushi") {
        restaurante = "Tokin"; }

    else if (comida === "pasta") {
        restaurante = "San Pietro"}

    else if (comida === "pizza") {
        restaurante ="Il Forno de Marco";}

    else if (comida === "comida peruana") {
        restaurante = "Sabores del peru"}
    
    else {
        alert ("Ups, No conozco un restaurante para esa comida, proximamente cargaremos nuevos lugares para tu deleite") }

    } while (!restaurante);

    console.log ("Te recomiendo ir a ${restaurante} para comer la/el mejor ${comida}")

    ADondeVamos ()
















}