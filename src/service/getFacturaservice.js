import { factura } from "../data/factura"

export const getFacturaService = () => {
  return factura
}

export const getCantProductos = (items) => {

  let cantidad = 0;
  items.map(cant => {
    cantidad += cant.cantidad;
  })
  /*    for(let i=0; i<factura.items.length; i++ ) {
         cantidad += factura.items[i].cantidad;
       } */

  return cantidad;

}