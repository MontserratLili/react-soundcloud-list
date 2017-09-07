import React, {Component} from 'react';

export default class Form extends Component{
    constructor(props){
        super (props);
        this.state={
            cancion: {}
        }
        this.actualizarEstado = this.actualizarEstado.bind(this);
        this.agregarCancion = this.agregarCancion.bind(this);
        
    }
    actualizarEstado(e){
        const nuevoValor = e.target.value;
        const propiedad = e.target.dataset.target;
        console.log(propiedad);
        let cancion = this.state.cancion;
        cancion[propiedad] = nuevoValor;
        this.setState({
            cancion:cancion
        })
    }
    agregarCancion(e) {
        e.preventDefault();
        const cancion = this.state.cancion;
        console.log(cancion);
        this.props.agregar(cancion);
        this.setState({
            cancion:{
                nombre: '',
                artista: '',
                imagen: ''
            }
            
        });
    }
    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.agregarCancion}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Nombre" id="nombre" type="text" className="validate" data-target='nombre' value={this.state.cancion.nombre} onChange={this.actualizarEstado}/>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="Artista" id="artista" type="text" className="validate" data-target='artista' value={this.state.cancion.artista} onChange={this.actualizarEstado}/>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="URL imagen" id="imagen" type="text" className="validate" data-target='imagen' value={this.state.cancion.imagen} onChange={this.actualizarEstado}/>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>   
                </form>
            </div>
        );
    }
}
