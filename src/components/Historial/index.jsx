import React from "react";

class Historial extends React.Component{
    render(){
        return(
        <React.Fragment>
            <p className = "historial">Historial de opciones elegidas:</p>
        <ul>
          {
            this.props.listaSeleccion.map(item => {
              return <li>{item.toUpperCase()}</li>
            })
          }
        </ul>
        </React.Fragment>
        )
    }
}

export default Historial;