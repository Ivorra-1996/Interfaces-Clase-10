import React from "react";
import { Fragment } from "react";
import './estilo/changuito.css';
import Producto from "./Productos";

const Changuito = ({changuito,agregarProducto}) =>{
    const {articulo,id,precio,fechaDeEnvasado} = changuito;

    return(
        <Fragment>
            <div className="changuito btn btn-dark" >
                <h1>Changuito</h1>
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                {changuito.map(producto => 
                                    <Producto
                                        key= {producto.id}
                                        producto= {producto}
                                        changuito = {changuito}
                                        agregarProducto = {agregarProducto}
                                    />
                                    )
                                }
                     </ul>
            </div>
            
        </Fragment>
    );
}
export default Changuito;

