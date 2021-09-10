import React from "react";
import "./index.css";
import data from "./components/data.json";
import Header from "./components/Header/index";
import Parragraph from "./components/Parragraph/index";
import Buttons from "./components/Buttons/index";
import UltSeleccion from "./components/UltSeleccion/index";
import Historial from "./components/Historial/index";
import ParrafosOpciones from "./components/ParrafosOpciones/index";
import Final from "./components/Final";
import ImgIlustrativas from "./components/ImgIlustrativas";

class App extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      opcionElegida : data[0].id,
      ultSeleccion : "",
      listaSeleccion : [],
      contador : 0
    }
    this.handleClickOptions = this.handleClickOptions.bind(this);
  }

  handleClickOptions(e){
      e === "a"
      ? this.setState({
        opcionElegida : parseInt(this.state.opcionElegida) + 1 + "a",
        ultSeleccion : e,
        contador : this.state.contador === 0 ? this.state.contador = this.state.contador +1 : this.state.contador = this.state.contador +2,
        listaSeleccion : [...this.state.listaSeleccion, e]
      })
      : this.setState({
        opcionElegida : parseInt(this.state.opcionElegida) + 1 + "b",
        ultSeleccion : e,
        contador : this.state.contador +2,
        listaSeleccion : [...this.state.listaSeleccion, e]
      })
  }

  handleClickReiniciar(){
    window.location.reload()
  }

  render(){
    return(
      this.state.contador >= data.length ? <Final handleClickReiniciar = {this.handleClickReiniciar}/> :
      (<div className = "contenedorPrincipal">
        <Header />
        <main>
          <section>
            <Parragraph opcionElegida = {this.state.opcionElegida} />
          </section>
          <section>
            <Buttons handleClickOptions = {this.handleClickOptions}/>
            <ParrafosOpciones contador = {this.state.contador}/>
          </section>
          <section>
            <ImgIlustrativas contador = {this.state.contador}/>
          </section>
          <hr></hr>
        </main>
        <footer>
          <UltSeleccion seleccion = {this.state.ultSeleccion}/>
          <Historial listaSeleccion = {this.state.listaSeleccion}/>
        </footer>
      </div>
    )
    )
  }
}


export default App;
