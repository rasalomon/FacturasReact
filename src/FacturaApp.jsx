import { factura } from "./data/factura"
import { getFacturaService, getCantProductos } from "./service/getFacturaservice";
import { CompanniaView } from "./components/CompanniaView";
import { ClienteView } from "./components/ClienteView";
import { ListaItemsView } from "./components/ListaItemsView";

export const FacturaApp = () => {
    const { id, nombre, cliente, compannia } = getFacturaService();

    console.log(factura);
    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        <h1>Factura numero: {factura.id}</h1>
                    </div>

                    <ul className="list-group">
                        <ClienteView nombre={nombre} cliente={cliente}></ClienteView>
                        <CompanniaView compannia={compannia}></CompanniaView>
                        <li className="list-group-item">Cantiad de productosvendidos: {getCantProductos(factura)}</li>
                    </ul>

                    <ListaItemsView titulo="Productos del Cliente" factura={factura}></ListaItemsView>
                </div>
            </div>
        </>
    )
}