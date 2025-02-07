import { factura } from "./data/factura"
import { getFacturaService, getCantProductos } from "./service/getFacturaservice";
import { CompanniaView } from "./components/CompanniaView";
import { ClienteView } from "./components/ClienteView";
import { ListaItemsView } from "./components/ListaItemsView";
import { useState } from "react";

export const FacturaApp = () => {
    const { id, nombre, cliente, compannia, items: itemsfactura } = getFacturaService();
    const [producto, setProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');

    const [ contador, setContador] = useState(4);

    const [ items, setItems ] = useState(itemsfactura)

    console.log(items);
    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        <h1>Factura numero: {factura.id}</h1>
                    </div>

                    <ul className="list-group">
                        <ClienteView nombre={nombre} cliente={cliente}/>
                        <CompanniaView compannia={compannia}/>
                        <li className="list-group-item">Cantiad de productos vendidos: {getCantProductos(items)}</li>
                    </ul>
                    <ListaItemsView titulo="Productos del Cliente" items = {items}/>

                
                    <form className="w-50" onSubmit={event => {
                        event.preventDefault();
                        setItems([...items, {
                            id: contador,
                            producto: producto,
                            precio: +precio,
                            cantidad: parseInt(cantidad, 10),
                        }]);
                        setCantidad('');
                        setPrecio('');
                        setProducto('');
                        setContador(contador + 1); 
                    }}>
                        <input type="text"
                            className="form-control m-3"
                            name="producto" value={producto}
                            placeholder="Producto" onChange={event => {
                                setProducto(event.target.value);
                            }}/>
                        <input type="text"
                            className="form-control m-3"
                            name="precio" value={precio}
                            placeholder="Precio" onChange={event => {
                                setPrecio(event.target.value);                        
                            }} />
                        <input type="text"
                            className="form-control m-3"
                            name="cantidad" value={cantidad}
                            placeholder="Cantidad" onChange={event => {
                                setCantidad(event.target.value);
                            }} />

                        <button type="submit" className="btn btn-primary m-3">Agregar Item</button>
                    </form>
                </div>
            </div>
        </>
    )
}