import React from 'react';

import MyNavbar from '../layout/Navbar';
import Footer from '../layout/Footer';

export default class ConnexionChat extends React.Component {
    render() {
        return (
            <div>
                <MyNavbar />
                    <div className="text-center py-5">
                        <h3>Sexy chat</h3>
                        <form onSubmit={(e) => this.goToChat(e)}>
                            <div className="row">
                                <div className="col-12 py-2">
                                    <input type="text" placeholder="Name" required />
                                </div>
                                <div className="col-12 py-2">
                                    <input type="submit" value="Enter" />
                                </div>
                            </div>
                        </form>
                    </div>
                <Footer />
            </div>
        )
    }
}