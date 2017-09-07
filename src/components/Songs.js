import React, { Component } from 'react';

class Songs extends Component{
    render() {
        return (
            <div className="col s6 m3 card container"> 
                <div>
                    <img className="responsive-img" src={this.props.imageUrl}  alt={this.props.name}/>
                </div>
                <div>
                    <p className="blue-text">{this.props.username}</p>
                    <p>{this.props.name}-{this.props.artist}</p>
                </div>
                <div>
                    Controles de Reproducción
                </div>
            </div>
        );
    }
}

export default Songs;