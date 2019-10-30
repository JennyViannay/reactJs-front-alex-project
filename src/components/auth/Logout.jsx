import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    logout = () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isOnline');
        this.redirectToLogin();
    }

    redirectToLogin = () => {
        window.location.reload();
        return <Redirect to='/' />
    }

    render() {
        return (
            <button type="button" className="nes-btn is-primary" onClick={this.logout}>
                <img className="nes-avatar is-small" alt="Gravatar" src="https://www.gravatar.com/avatar?s=15" ></img>
            </button>
        )
    }
}

export default Logout;