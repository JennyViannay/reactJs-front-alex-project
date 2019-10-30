import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            // <div className="mt-5 bgPurple textShadow">
            //     <footer className="footer text-center">
            //         <div className="container-fluid">
            //             <p>Make with love by Jeneva Ascii</p>
            //         </div>
            //     </footer>
            // </div>
            <div className="nes-container member-card mt-5 mb-0">
                <div className="avatar">
                    <img src="https://avatars3.githubusercontent.com/u/32166518?s=400u=807a045773fff51619d0cb2e23d208a083e95660v=4" alt="avatar"/>
                </div>
                <div className="profile">
                    <h4 className="name">Jeneva Ascii</h4>
                    <p>Creator of Alex's Project</p>
                    <a href="www.instagram.com" target="_blank" className="mx-2"><i className="nes-icon instagram is-large"></i></a>
                    <a href="www.github.com" target="_blank" className="mx-2"><i className="nes-icon github is-large"></i></a>
                    
                </div>
            </div>
        );
    }
}