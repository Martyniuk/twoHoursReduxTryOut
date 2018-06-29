// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import logInActions from '../../actions/';

const styles = {
    wrapper: {
        display:         'flex',
        justifyContent:  'center',
        flexDirection:   'column',
        alignItems:      'center',
        minHeight:       '100vh',
        backgroundColor: '#E9EBEE',
        color:           'white',
        fontSize:        24,
        fontWeight:      '600',
        padding:         '70px 0 0',
    },
    input: {
        width:    230,
        height:   30,
        margin:   '0 auto 12px',
        padding:  '8px 10px',
        border:   '1px solid #DDDFE2',
        outline:  'none',
        color:    '#1D2129',
        fontSize: 17,
    },
    checkbox: {
        display:    'flex',
        alignItems: 'center',
        margin:     '0 20px 40px 0',
        color:      '#282828',
        cursor:     'pointer',
        userSelect: 'none',
        fontSize:   '0.7em',
        fontWeight: 500,
    },
    button: {
        display:         'flex',
        justifyContent:  'center',
        alignItems:      'center',
        width:           230,
        height:          34,
        padding:         '8px 10px',
        borderRadius:    2,
        backgroundColor: '#4267B2',
        color:           '#FFF',
        fontSize:        12,
        fontWeight:      '600',
        outline:         0,
        cursor:          'pointer',
        transition:      'background-color 0.2s ease-out, border-color 0.2s ease-out',
        border:          '1px solid #4267B2',
    },
};

class Index extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email:    '',
            password: '',
        };
    }

    handleSubmit = () => {
        //elsint-disable-nest-line
        const { email, password } = this.state;

        // dispatch action, saga will watch it and then will send request with fields above
    };

    render () {
        return (
            <div>
                <form style = { styles.wrapper }>
                    <input placeholder = 'Email' style = { styles.input } type = 'text' />
                    <input placeholder = 'Password' style = { styles.input } type = 'text' />
                    <label style = { styles.checkbox }>
                        <input type = 'checkbox' />
                        Remember me?
                    </label>
                    <button style = { styles.button } onSubmit = { this.handleSubmit }>Log In</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    logIn: bindActionCreators({ ...logInActions }, dispatch),
});

export default connect(mapDispatchToProps)(Index);
