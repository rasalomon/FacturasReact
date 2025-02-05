export const ClienteView = ({ nombre, cliente }) => {
    return (
        <>
            <li className="list-group-item active ">nomre factura: {nombre}</li>
            <li className="list-group-item">Nombre de cliente: {cliente.nombre}</li>
            <li className="list-group-item">Apellido de cliente: {cliente.apellido}</li>

        </>
    )
}