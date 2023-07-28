import {Link} from "react-router-dom";
import {useContext} from "react";
import {CarritoContext} from "../contexto/CarritoComprasContext";

export const Navbar = () =>{

    const [carrito] = useContext(CarritoContext);

    const cantidad = carrito.reduce((acum, actual) => {
        return acum + actual.quantity;
    }, 0);
    //const [cantidad] = useNavbar(cantidad);

    const estilos = {
        color: "#fff",
        listStyle: "none",
        textdecoration: "none"
    }

    return(
        <nav>
            <Link to="/" style={estilos}>
                <h2>Tienda OnLine</h2>
            </Link>
            <Link to={'/carrito'}>
                <ul className="nav-list" style={estilos}>
                    <li>
                        Productos <span className="contador">{cantidad}</span>
                    </li>
                </ul>
            </Link>
        </nav>
    )
}