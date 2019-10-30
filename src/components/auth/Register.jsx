import React, { Component } from 'react';

import axios from 'axios';

const apiBaseUrl = "http://localhost:5000/api/";

class Register extends Component {
  state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      isOnline: false,
      password_has_error: true
    }

onSubmit = (e) => {
  e.preventDefault();
  if(this.state.password_has_error === false){
    const payload = {
      username : this.state.username,
      email: this.state.email,
      password : this.state.password,
      online : true
    }
    axios.post(apiBaseUrl + 'register', payload)
      .then((response) => {
        if (response.data.code === 200) {
          console.log(response);
          console.log("Register successfull");
          this.handleChangeOnline();
        }
        else {
          console.log("Error");
          alert("Error, this email is already use for an account");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    alert('Passwords do not match')
  }
  
}

handleChangeOnline = () => {
  this.setState({
    isOnline : true
  })
}
  
handleChange = (e, pass1, pass2) => {
  const { name, value } = e.target
  this.setState({[name] : value }, () => {
      if (name === 'password' || name === 'password2') {
        this.checkPassword();
      }
  })
}

checkPassword = () => {
  if(!this.state.password || this.state.password !== this.state.password2) {
      this.setState({password_has_error:true});
  }
  else {
      this.setState({password_has_error:false});
  }
}
  render() {
    return (
      <div className="text-center">
        <form className="form" noValidate >
          <div className="row">
            <div className="col-12 my-2">
              <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
            </div>
            <div className="col-12 my-2">
              <input type="email" name="email" placeholder="email" onChange={this.handleChange} />
            </div>
            <div className="col-12 my-2">
              <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
            </div>
            <div className="col-12 my-2">
              <input type="password" name="password2" placeholder="confirm password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-2">
              <input type="submit" onClick={this.onSubmit} value="Submit" />
            </div>
          </div>
        </form>
        Already have an account ? <a href="/">Go to login</a>
    </div> 
    )
  }
}

export default Register;