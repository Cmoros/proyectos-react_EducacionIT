import { useState } from "react";

/* NOS OLVIDAMOS UN RATO DEL LOCAL STORAGE */
function useCarritoDeCompras(){

    const [carrito, setCarrito] = useState([]);

    
    const agregarItem = (adding) => {
        /* Parte 1 - Agregar el item.  */
        if (carrito.find(item => item.id === adding.id)) return
        setCarrito(old => [...old, adding])
    }

    const quitarItem = (deletingItem) => {
        /* Parte 1 - Agregar el item.  */
        setCarrito(old => old.filter(({id}) => id !== deletingItem.id))
    }

    return [
        carrito,
        agregarItem,
        quitarItem,
    ];
}

export default useCarritoDeCompras;