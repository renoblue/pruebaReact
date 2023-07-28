import {Navbar} from "./componentes/Navbar";
import {ListaProductos} from "./componentes/ListaProductos";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {CarritoCompras} from "./componentes/CarritoCompras";
import {CarritoComprasProvider} from "./contexto/CarritoComprasContext";

function App() {
    return (
        <CarritoComprasProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ListaProductos/>}></Route>
                    <Route path="/carrito" element={<CarritoCompras/>}></Route>
                </Routes>
            </Router>
        </CarritoComprasProvider>
    )

}

export default App;
