import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {


  // crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa REactJS', precio: 50},
    { id: 2, nombre: 'Camisa VueJS', precio: 40},
    { id: 3, nombre: 'Camisa Node.JS', precio: 30},
    { id: 4, nombre: 'Camisa Angular', precio: 20},
  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);


  // obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
            />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
        />

      <Footer 
        fecha={fecha}
        />
    </Fragment>
  );
}

export default App;
