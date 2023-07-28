import {data} from '../util/data.js';
import {Producto} from "./Producto";

export const ListaProductos = () => {
    return (
        <div className={'lista-items'}>
            {
                data.map((producto, idx) => {
                    return <Producto key={producto.id} {...producto}/>
                })
            }
        </div>
    )
}