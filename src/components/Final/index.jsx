import React from "react";

class Final extends React.Component{
    render(){
        return(
        <div className = "contenedorPrincipal">
            <h2>¡Terminaste tu aventura!</h2>
            <button className = "botones" onClick = {() => this.props.handleClickReiniciar()}> Apretá aquí para volver a jugar</button>
            <img src="https://c.tenor.com/siMEBpzEDpIAAAAd/frozen-disney.gif" alt="Let's go and play, de Frozen" />
        </div>
        )
    }
}

export default Final;