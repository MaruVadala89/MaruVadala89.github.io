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






