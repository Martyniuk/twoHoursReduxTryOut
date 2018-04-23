// Core
import React, { Component } from 'react';

export default class App extends Component {
    render () {
        return (
            <h1
                style = { {
                    display:         'flex',
                    justifyContent:  'center',
                    alignItems:      'center',
                    height:          '100vh',
                    backgroundColor: '#090C14',
                    color:           '#FFF',
                    fontSize:        30,
                } }>
                Привет! Начало здесь.
            </h1>
        );
    }
}
