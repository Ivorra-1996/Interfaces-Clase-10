import React from "react";

const Header = () =>{
    return(
        /*Va un solo div mas de 2 da error. */
        <div >
            <div className ="bg-primary text-center p-fixed">
                <h1>Almacen El Pipex</h1>
                <h2>Productos de calidad</h2>
            </div>
        </div>
    );
}

export default Header;