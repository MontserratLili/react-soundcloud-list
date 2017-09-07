import React, { Component } from 'react';
import Form from './components/Form';
import SongRow from './SongRow';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            playlist: []
        };
        this.agregarCancionAPlaylist = this.agregarCancionAPlaylist.bind(this);
    }

    agregarCancionAPlaylist(cancion) {
        let listaCanciones = this.state.playlist;
        listaCanciones.push(cancion);
        this.setState({
            playlist: listaCanciones
        });
        console.log(listaCanciones);
    }

    render() {
        return (
            <div className="container">
                <Form agregar={this.agregarCancionAPlaylist}/>
                <SongRow playlist={this.state.playlist}/>
            </div>
        );
    }
}

export default App;
