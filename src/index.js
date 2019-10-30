import React from 'react';
import ReactDOM from 'react-dom';

//rooting
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/routes/PrivateRoute'

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets-app/App.css';
import './assets-app/myStyle.css';

//components
import App from './App';
import MyHome from './components/privatePages/MyHome';
import Stories from './components/stories/Stories';
import Game from './components/game/Game';
import Chatbox from './components/chatbox/Chatbox';
import Surprises from './components/stories/Surprises';
import Register from './components/auth/Register';
import User from './components/user/User';
import * as serviceWorker from './serviceWorker';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path='/register' component={Register} />
        {/* <Route component={NotFound} /> */}
        <PrivateRoute path="/home" component={MyHome} />
        <PrivateRoute path="/stories" component={Stories} />
        <PrivateRoute path="/surprises" component={Surprises} />
        <PrivateRoute path="/game" component={Game} />
        <PrivateRoute path="/chat" component={Chatbox} />
        <PrivateRoute path="/user" component={User} />
      </div>
    </Router>
  )

ReactDOM.render(
  routing, 
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
