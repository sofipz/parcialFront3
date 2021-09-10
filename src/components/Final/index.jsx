import React from "react";

class Final extends React.Component{
    render(){
        return(
        <div className = "contenedorPrincipal">
            <h2>¡Terminaste tu aventura!</h2>
            <button className = "botones" onClick = {() => this.props.handleClickReiniciar()}> Apretá aquí para volver a jugar</button>
            
        </div>
        )
    }
}

export default Final;