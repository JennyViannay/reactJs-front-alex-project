import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


import MyCountdown from '../tools/Countdown'
import Logout from '../auth/Logout';

export default class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="/home" className="textBlue hoverLink"><span className="textRed">A</span>lex's <span className="textGreen">P</span>roject</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="/user" className="textBlue hoverLink">My account</Nav.Link>
                            <Nav.Link href="/stories" className="textBlue hoverLink">Stories</Nav.Link>
                            <Nav.Link href="/game" className="textBlue hoverLink">Play</Nav.Link>
                            <Nav.Link href="/chat" className="textBlue hoverLink">Chat</Nav.Link>
                            <Logout />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <MyCountdown/>
                {/* <progress className="nes-progress is-pattern" value="100" max="100"></progress> */}
            </div>
        );
    }
}