import Header from "./componets/Header";
import { useState, Fragment } from "react";
import Productos from "./componets/Productos";
import Changuito from "./componets/Changuito";
import Footer from "./componets/Footer";

function App() {
// Acar pongo el JS que necesite.
// Es mas seguro y es una buena practica.
  const anio = new Date().getFullYear();

  const [productos,guardarProductos] = useState([
    {id : 1, articulo:"Leche Sancor",precio:"100",fechaDeEnvasado:anio,img:"https://walmartar.vteximg.com.br/arquivos/ids/865231-1000-1000/0779008003718-1.jpg?v=637266433316200000"},
    {id : 2, articulo:"Cacao Nesquik",precio:"1000",fechaDeEnvasado:anio,img:"https://http2.mlstatic.com/D_NQ_NP_922748-MLA41445355984_042020-O.webp"},
    {id : 3, articulo:"Galletitas Diversion",precio:"110",fechaDeEnvasado:anio,img:"https://arcorencasa.com/wp-content/uploads/2021/03/20210301-13277.png"},
    {id : 4, articulo:"Alfajor Fulbito",precio:"50",fechaDeEnvasado:anio,img:"https://i.pinimg.com/736x/ef/1c/8a/ef1c8a6f0b37c69261b341c158554ef2.jpg"}
  ]);

  //Changuito
  const [changuito,agregarProducto] = useState([]);

  return (
    <Fragment>
      <Header />

      {productos.map(producto => 
        (
         <Productos 
           changuito = {changuito}
           agregarProducto ={agregarProducto}
           key = {producto.id}
           producto = {producto}
           productos = {productos}
         />
        )
          )}

      <Changuito 
          changuito = {changuito}
          agregarProducto = {agregarProducto}
      />
      <Footer/>
    </Fragment>
  );
}

export default App;
