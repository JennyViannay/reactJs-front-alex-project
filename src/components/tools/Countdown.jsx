import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

export default class MyCountdown extends Component {
    render() {
        const now = Date.now();
        const end = new Date('02 Apr 2020 06:02:03');
        const diff = end - now;
        const rest = now + diff;
        return (
            <div className="nes-container with-title">
                <h3 className="title">Rest before 02/04/2020, 06h55m02s :</h3>
                <div >
                     <Countdown date={rest} />
                </div>
            </div>
        );
    }
}