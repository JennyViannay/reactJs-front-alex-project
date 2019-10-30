import React, { Component } from 'react';
import axios from 'axios';

const apiBaseUrl = "http://localhost:5000/api/";

class Login extends Component {
  state = {
    username: '',
    password: '',
    online: false,
    currentUser: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios.post(apiBaseUrl + 'login', this.state)
      .then((response) => {
        if (response.data.code === 200) {
          console.log("Login successfull");
          localStorage.setItem('currentUser', this.state.username);
          localStorage.setItem('online', true);
          this.getCurrentUser();
          this.redirectToHome(e);

        }
        else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert(response.data.success)
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getCurrentUser = () => {
    const currentUser = localStorage.getItem('currentUser');
    const online = localStorage.getItem('online');
    this.setState({
      online: online,
      currentUser: currentUser
    })
    return currentUser;
  }

  redirectToHome = () => {
    window.location.reload();
  }

  logout = () => {
    localStorage.removeItem('currentUser');
    this.setState({
      username: '',
      password: '',
      online: false,
      currentUser: {}
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="text-center">
        <form className="form" noValidate >
          <div className="row">
            <div className="col-12 my-2">
              <input type="text" name="username" placeholder="username" ref={input => this.username = input} onChange={this.handleChange} />
            </div>
            <div className="col-12 my-2">
              <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-2">
              <input type="submit" onClick={this.onSubmit} value="Submit" />
            </div>
          </div>
        </form>
        Not have an account ? <a href="/register">Go to register</a>
      </div> 
    )
  }
}

export default Login;