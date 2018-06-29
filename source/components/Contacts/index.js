// Core
import React, { Component } from 'react';

const styles = {
    display:         'flex',
    justifyContent:  'center',
    alignItems:      'center',
    minHeight:       '100vh',
    backgroundColor: 'slateblue',
    color:           'white',
    fontSize:        24,
    fontWeight:      '600',
};

class Contacts extends Component {

    render () {
        return (
            <div
                style = { styles }>
                Contacts could be here
            </div>
        );
    }
}

export default Contacts;
