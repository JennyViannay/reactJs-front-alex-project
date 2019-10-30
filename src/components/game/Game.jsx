import React from 'react';
import axios from 'axios';

import MyNavbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Formulaire from './Formulaire';
import Messages from './Messages';

const currentUser = localStorage.getItem('currentUser');
const apiBaseUrlListCadavre = 'http://localhost:5000/api/game/list/clear';
const apiBaseUrlListCrypted = 'http://localhost:5000/api/game/list/crypted';

export default class Game extends React.Component {
    state = {
        username: currentUser,
        messages: {},
        dataCrypted: {},
        dataStandard: {}
    }

    addMessage = (message) => {
        const messages = { ...this.state.messages };
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        console.log(messages[`message-${timestamp}`] = message)
        this.setState({
            messages
        })
        this.getListMessagesClear();
        this.getListMessagesCrypted();
    };

    getListMessagesClear = async () => {
        axios.get(`${apiBaseUrlListCadavre}`)
            .then((response) => {
                this.setState({
                    dataStandard: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    getListMessagesCrypted = async () => {
        axios.get(`${apiBaseUrlListCrypted}`)
            .then((response) => {
                this.setState({
                    dataCrypted: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    componentDidMount() {
        this.getListMessagesClear();
        this.getListMessagesCrypted();
    }; 

    render() {
        console.log(this.state)
        const mapMessagesClear = Object.keys(this.state.dataStandard).map(key => <Messages key={key} detail={this.state.dataStandard[key]} />)
        // const mapMessageCrypted = Object.keys(this.state.dataStandard).map(key => <Messages key={key} detail={this.state.dataStandard[key]} />)
        const cryptedmesg = Object.keys(this.state.dataStandard).map( () => { return this.state.dataCrypted.crypted})
        return (
            <div>
                <MyNavbar />
                <div className="nes-container with-title mt-5">
                    <h3 className="title">Welcome to the cadavre exquis</h3>
                    <div>
                        <div>
                            <div className="my-4">
                                {mapMessagesClear}
                            </div>
                        </div>
                        <Formulaire addMessage={this.addMessage} pseudo={currentUser} />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}