import React from 'react';
import data from  '../data.json'

class ImgIlustrativas extends React.Component{
    render(){
        return(
            <div className="divImagenes">
                <img src={data[this.props.contador].urlA} alt="Imagen Ilustrativa" />
                <img src={data[this.props.contador].urlB} alt="Imagen Ilustrativa" />
            </div>
        )
    }
}

export default ImgIlustrativas;