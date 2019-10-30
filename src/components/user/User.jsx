import React, { Component } from 'react'; 

class User extends Component {
  state = {
      username : '',
      email : '',
      isOnline : this.props.isOnline
  }


  render() {
    console.log(this.state)
    return (
      <div className="nes-container is-dark member-card">
        <div className="avatar">
          <img src="https://github.com/BcRikko.png?size=80" alt="Core Member B.C.Rikko" />		
        </div>
        <div className="profile">
          <h4 className="name">Jeneva Ascii</h4>
          <p>Creator of Alex's Project</p>
        </div>
      </div>
    )
  }
}

export default User;