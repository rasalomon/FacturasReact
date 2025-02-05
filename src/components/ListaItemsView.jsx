import PropTypes from "prop-types"
import { factura } from "../data/factura"

export const ListaItemsView = ({ titulo, factura }) => {
    const { producto, precio, cantidad } = factura.items
    return (
        <>

            <div className="tabla my-4 shadow-sm p-2 mb-2 bg-body-tertiary rounded"><h2>{titulo}</h2></div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto: </th>
                        <th>Precio: </th>
                        <th>Cantidad: {cantidad}</th>
                    </tr>
                </thead>
                <tbody>
                    {factura.items.map(({ id, producto, precio, cantidad }) => {
                        return (
                            <tr key={id}>
                                <td>{producto}</td>
                                <td>{precio}</td>
                                <td>{cantidad}</td>
                            </tr>)
                    })}

                </tbody>
            </table>
        </>
    )
}

ListaItemsView.propTypes = {
    titulo: PropTypes.string.isRequired,
    factura: PropTypes.object.isRequired
}