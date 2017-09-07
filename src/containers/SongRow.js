import React, {Component} from 'react';
import Songs from '../components/Songs';
import Spinner from '../components/Spinner';

const playlist = [
    {
        imageUrl:'https://i1.sndcdn.com/artworks-000192444803-5uo9pr-t500x500.jpg',
        username: 'terror',
        name: 'bajo el sol',
        artist: '   kv'
    },
    {
        imageUrl:'https://i1.sndcdn.com/artworks-000195798628-2z475v-t500x500.jpg',
        username: 'BRUK',
        name: 'desamor',
        artist: 'attaque77'
    },
    {
        imageUrl:'https://i1.sndcdn.com/artworks-000182755511-wz2o9f-t500x500.jpg',
        username: 'hijmer',
        name: 'hello',
        artist: 'Adele'
    },
    {
        imageUrl:'https://i1.sndcdn.com/artworks-000186848616-wrijmy-t500x500.jpg',
        username: 'Safer at nigth',
        name: 'why',
        artist: 'kjhjh'
    }
]


export default class SongRow extends Component {
    constructor(props){
        super(props); //Llama al constructor de la clase padre (Component)

    }

    render () {
        //console.log('Estamos en el método render');
        return (
            <div className="row">
            <h1>SoundCloud Playlist</h1>
                {this.props.playlist.map((song, i) =>{ 
                    return <Songs key={i}
                    imageUrl={song.imagen}
                    username={''}
                    name={song.nombre}
                    artist={song.artista}/>
                })}
            </div>
        );
    }
}
