import { factura } from "../data/factura"
import { getFacturaService, getCantProductos } from "../service/getFacturaservice";

export const FacturaApp = () => {
    const factura = getFacturaService();
   
    console.log(factura);
    return (
    <>
        <h1>Factura numero: { factura.id}</h1>
        <ul>
            <li>nomre factura: {factura.nombre}</li>
            <li>Nombre de cliente: {factura.cliente.nombre}</li>
            <li>Apellido de cliente: {factura.cliente.apellido}</li>
            <li>Nombre de la compañia: {factura.compannia.nombre}</li>
            <li>Numero fiscal: {factura.compannia.NumeroFiscal}</li>
            <li>Cantiad de productosvendidos: { getCantProductos(factura) }</li>
        </ul>

        
    </>
    )
}