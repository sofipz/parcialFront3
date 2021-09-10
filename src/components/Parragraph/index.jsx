import React from 'react';
import data from '../data.json';

class Parragraph extends React.Component{
    render(){
        return(
            <div>
                {
                data.filter(element => element.id === this.props.opcionElegida).map(element => element.historia)
                }
                
            </div>
        )
    }
}

export default Parragraph;