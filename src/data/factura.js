export const factura = {
  id: 10,
  nombre: 'Factura RSoftD',
  cliente: {
    nombre: 'Rene',
    apellido: 'Salomon',
    edad: 37,
    direccion: {
      calle: 'Francisco Simon',
      numero: 2395,
      entreCalles: 'Mateo Vidas ' + 'Cardal',
    }
  },
  compannia: {
    nombre: 'RSoftD',
    NumeroFiscal: 123456
  },
  items: [
    {
      id: 1,
      producto: 'CPU',
      precio: 550,
      cantidad: 7,
      marca: 'intel'
    },
    {
      id: 2,
      producto: 'RAM',
      precio: 123,
      cantidad: 3,
      marca: 'intel'
    },
    {
      id: 3,
      producto: 'TARJETA DE VIDEO',
      precio: 456,
      cantidad: 11,
      marca: 'intel'
    }
  ]
}