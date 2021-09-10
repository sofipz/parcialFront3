import React from "react";

class UltSeleccion extends React.Component{
    render(){
        return(
            <p>Ultima seleccion: {this.props.seleccion.toUpperCase()}</p>
        )
    }
}

export default UltSeleccion;