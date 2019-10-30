import React from 'react';
import axios from 'axios';

import MyNavbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Formulaire from './Formulaire';
import Messages from './Messages';

const currentUser = localStorage.getItem('currentUser');
const apiBaseUrl = 'http://localhost:5000/api/messages';
const apiBaseUrlSend = 'http://localhost:5000/api/messages/send';

export default class Chatbox extends React.Component {
    state = {
        messages : {},
        username : currentUser,
        dataSend : {},
        dataReceved : {}
    }

    addMessage = (message) => {
        const messages = {...this.state.messages};
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        this.setState({
            messages   
        })
        this.getMessagesSendByUser();
    };

    getMessagesSendByUser = async () => {
        axios.get(`${apiBaseUrl}/${this.state.username}`)
        .then((response) => {
            this.setState({
                dataSend : response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    getMessagesRecevedByUser = async () => {
        axios.get(`${apiBaseUrlSend}/${this.state.username}`)
        .then((response) => {
            this.setState({
                dataReceved : response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        })
        
    };

    componentDidMount() {
        this.getMessagesSendByUser();
        this.getMessagesRecevedByUser();
    }

    render() {
        // const messages = Object.keys(this.state.messages).map(key => <Messages key={key} detail={this.state.messages[key]}/>)
        const mapMessagesSend = Object.keys(this.state.dataSend).map(key => <Messages key={key} detail={this.state.dataSend[key]}/>)
        const mapMessagesReceved = Object.keys(this.state.dataReceved).map(key => <Messages key={key} detail={this.state.dataReceved[key]}/>)
        return (
            <div>
                <MyNavbar />
                    <div className="nes-container with-title mt-5 py-5">
                        <h3 className="title">Welcome to the sexy chat</h3>
                        <div>
                            <div>
                                <div className="my-4">
                                    {mapMessagesSend}
                                </div>
                                <div className="my-4">
                                    {mapMessagesReceved}
                                </div>
                            </div>
                            <Formulaire addMessage={this.addMessage} pseudo={currentUser}/>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}