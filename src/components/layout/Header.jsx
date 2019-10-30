import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Jumbotron fluid className="header my-5 bgPurple">
        <Container fluid>
          <h1 className="">Fluides Fantaisistes</h1>
          <img src="./logo.png"className="navLogo" alt="playmehard" />
          <p className="lead textShadow">Press Enter to Play</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;