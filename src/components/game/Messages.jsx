import React from 'react';

export default class Messages extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="message">
                <p className="text-left">{this.props.detail.username} says :</p>
                <hr/>
                <div className="nes-balloon from-left">
                    <p id="message" className="text-left">{this.props.detail.crypted}</p>
                </div>
            </div>
        )
    }
}