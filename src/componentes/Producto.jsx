import {useProducto} from "../hooks/useProducto";

export const Producto = (
    {
        caprId,
        caprNombre,
        imgUrl,
        precio,


    }) => {

    const [agregarProducto, quitarProducto, cantPorItem] = useProducto({caprId, caprNombre, imgUrl, precio});


    return (
        <div className="item-box">

            {
                cantPorItem > 0 && (
                    <div className="item-cantidad">{cantPorItem}</div>
                )
            }

            <img src={imgUrl} width="140" height="80" alt={""}/>
            <div className="item-price">$ {precio}</div>
            <div>{caprNombre}</div>


            {
                cantPorItem === 0 ? (
                    <button
                        className="boton-agregar"
                        onClick={agregarProducto}>+ Agregar al carrito
                    </button>
                ) : (
                    <button
                        className="agregar-mas-items"
                        onClick={agregarProducto}>+ Agregar más
                    </button>
                )
            }

            {
                cantPorItem > 0 && (
                    <button
                        className="menos-items"
                        onClick={ quitarProducto}>- Quitar Producto</button>
                )
            }
        </div>
    )
}