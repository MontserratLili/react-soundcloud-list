import React, { Component } from 'react';
import '../components/Spinner.css';

export default class Spinner extends Component{
    render() {
        return (
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
        );
    }
}
