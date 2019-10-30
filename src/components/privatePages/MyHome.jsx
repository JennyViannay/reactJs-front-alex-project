import React from 'react';

//components 
import MyNavbar from '../layout/Navbar';
import Footer from '../layout/Footer';
export default class MyHome extends React.Component {
    render() {
        return (
            <div>
                <MyNavbar />
                <div className="nes-container with-title mt-5">
                    <h3 className="title ">Last stories</h3>
                    <div className="row tabContent mt-5">
                        <div className="col-6">
                            <div className="bodyCard my-2 nes-container with-title">
                                <h4 className="title">Lorem ipsum title</h4>
                                <div className="gifBodyCard">
                                    <img src="https://steamuserimages-a.akamaihd.net/ugc/952974387688115263/73D45A8941634B0F028DEC0B5BFAC6CF1D3DA3B6/" alt="Card cap" />
                                </div>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate nibh ut ipsum imperdiet elementum.</p>
                                <button type="button" className="nes-btn is-primary">Read storie</button>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="bodyCard my-2 nes-container with-title">
                                <h3 className="title">Lorem ipsum title</h3>
                                <div className="gifBodyCard">
                                    <img src="https://media.giphy.com/media/uozJs7kR6J98k/source.gif" alt="Card cap" />
                                </div>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate nibh ut ipsum imperdiet elementum.</p>
                                <button type="button" className="nes-btn is-primary">Read storie</button>
                                <div className="offset-11 col-1">
                                    <button className="like"><i className="nes-icon is-large heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}