import React from 'react';

export default class Messages extends React.Component {
    render() {
        return (
            <div className="message">
                <p className="text-left">{this.props.detail.pseudo} says :</p>
                <hr/>
                <div className="nes-balloon from-left">
                    <p id="message" className="text-left">{this.props.detail.message}</p>
                </div>
            </div>
        )
    }
}