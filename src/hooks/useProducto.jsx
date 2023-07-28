import {useContext} from "react";
import {CarritoContext} from "../contexto/CarritoComprasContext";

export const useProducto = ({caprId, caprNombre, imgUrl, precio}) => {

    const [carrito, setCarrito] = useContext(CarritoContext);

    const agregarProducto = () => {
        setCarrito((itmActual) => {
            const itmEncontrado = itmActual.find((item) => item.caprId === caprId);
            if (itmEncontrado) {
                return itmActual.map((item) => {
                    if (item.caprId === caprId) {
                        return {...item, quantity: item.quantity + 1};
                    } else {
                        return item;
                    }
                });
            } else {
                return [...itmActual, {caprId, quantity: 1, caprNombre, precio, imgUrl}];
            }
        })
    }

    const quitarProducto = (id) => {
        setCarrito((itmActual) => {
            if (itmActual.find((item) => item.id === id)?.quantity === 1) {
                return itmActual.filter((item) => item.id !== id);
            } else {
                return itmActual.map((item) => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getCantidadById = (caprId) => {
        return carrito.find((item) => item.caprId === caprId)?.quantity || 0;
    };

    const cantPorItem = getCantidadById(caprId);

    return [
        agregarProducto,
        quitarProducto,
        cantPorItem
    ]
}