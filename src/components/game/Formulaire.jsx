import React from 'react';
import axios from 'axios';

const apiBaseUrl = "http://localhost:5000/api/game";
const currentUser = localStorage.getItem('currentUser');

export default class Formulaire extends React.Component {
    createMessage = (e) => {
        e.preventDefault();
        const message = {
            message: this.message.value,
            pseudo: currentUser
        };

        this.props.addMessage(message);
        this.messageForm.reset();
        axios.post(apiBaseUrl, message)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    console.log("message envoyé");
                }
                else {
                    console.log("erreur, message echec");
                    alert("erreur, message echec");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="nes-container with-title">
                <h3 className="title">Enter your text here :</h3>
                <form className="form"
                    onSubmit={e => this.createMessage(e)}
                    ref={input => this.messageForm = input}
                >
                    <div className="text-center">
                        <textarea
                            className="nes-input is-warning"
                            ref={input => this.message = input}
                            id=""
                            cols=""
                            rows="5"
                        >
                        </textarea>
                        <br />
                        <input type="submit" value="Send" className="nes-btn is-primary" />
                    </div>
                </form>
            </div>
        )
    }
}