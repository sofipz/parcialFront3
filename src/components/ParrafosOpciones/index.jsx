import React from 'react';
import data from  '../data.json'

class ParrafosOpciones extends React.Component{
    render(){
        return(
            <React.Fragment>
                 <div className = "divBotones">
                    <p>{data[this.props.contador].opciones.a}</p>
                    <p>{data[this.props.contador].opciones.b}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default ParrafosOpciones;