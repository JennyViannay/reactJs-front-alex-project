import React from 'react';

import MyNavbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';


export default class Storie extends React.Component {
    render() {
        return (
            <div>
                <MyNavbar />
                    ICI UNE HISTOIRE
                <Footer />
            </div>
        )
    }
}