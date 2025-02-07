import PropTypes from "prop-types"

export const ListaItemsView = ({ titulo, items: itemsReact }) => {
   
    return (
        <>

            <div className="tabla my-4 shadow-sm p-2 mb-2 bg-body-tertiary rounded"><h2>{titulo}</h2></div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsReact.map(({ id, producto, precio, cantidad }) => {
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
    items: PropTypes.array.isRequired
}