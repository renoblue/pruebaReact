import {useContext} from "react";
import {CarritoContext} from "../contexto/CarritoComprasContext";

export const CarritoCompras = () => {

    const [carrito ] = useContext(CarritoContext);

    const cantidad = carrito.reduce((acum, actual) => {
        return acum + actual.quantity;
    }, 0);

    const precioTotal = carrito.reduce((acum, actual) => {
        return acum + actual.quantity * actual.precio;
    }, 0);

    return (
        <div className="carrito-container">
            <div>Productos en el carrito: {cantidad}</div>
            <br/>
            <div>Total: ${precioTotal}</div>
            <br/>
            <button onClick={() => console.log(carrito)}>Mostrar</button>
        </div>
    )
}