import React from "react";
import { Fragment } from "react";

//Componente Producto.
//Le paso una lista mapeada de los productos por parametro.
//A la lista mapeada le pido solo el articulo.
// Luego el componente lo muestra.
const Producto = ({producto, productos,changuito,agregarProducto}) =>{
    const {articulo,id,fechaDeEnvasado,precio,img} = producto

    const seleccionarProducto = (id) => {
        const productoFiltrado = productos.filter(producto => producto.id === id)[0];
        agregarProducto([... changuito, productoFiltrado]);
    }
    // funcioque que quita el producto del changuito..
    const eliminarProducto = (id) =>{
        const productos = changuito.filter(producto => producto.id !== id);
        agregarProducto(productos);
    }

    return(
        <Fragment>
            <div className="d-flex flex-wrap d-flex justify-content-evenly">
                <div className="px-4 py-0">
                    <div className="card m-5 p-3 bg-dark" style={{width:330}}>
                        <div >
                            <img src={img} className="card-img-top" alt="Imagen de trago"/>
                        </div>
                        <div className="card-body bg-light">
                            <h5 className="card-title">{articulo}</h5>
                            <p className="card-text">${precio}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Fecha de envasado:{fechaDeEnvasado}</li>
                            </ul>
                        </div>
                            {
                                productos
                                ?
                                    <button type="button" onClick={() => seleccionarProducto(id)}>Comprar</button>
                                :
                                    <button onClick = {() => eliminarProducto(id)}>Eliminar</button>
                            }        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Producto;
