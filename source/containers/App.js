// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Navigation from '../components/Navigation';
import Contacts from "../components/Contacts";
import LogIn from "../components/LogIn";

class App extends Component {

    render () {
        const { isAuthenticated } = this.props;

        return (
            <div>
                <Navigation />
                {isAuthenticated && <Contacts />}
                {!isAuthenticated && <LogIn />}
            </div>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => ({
    isAuthenticated: loginReducer.get('isAuthenticated'),
});

export default connect(mapStateToProps)(App);
