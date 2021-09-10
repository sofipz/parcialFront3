import React from "react";

class Buttons extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className = "divBotones">
                <button className = "botones" name = "a" onClick = {() => this.props.handleClickOptions("a")}>A</button>
                <button className = "botones" name = "b" onClick = {() => this.props.handleClickOptions("b")}>B</button>
            </div>
            </React.Fragment>
        )
    }
}

export default Buttons;