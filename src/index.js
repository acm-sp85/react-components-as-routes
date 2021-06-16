import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink}  from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import messages from './Messages'
import signup from './Signup'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => 
  <div>
    <NavLink to="/" exact style={link} activeStyle={{
      background: 'darkblue'
    }}>Home</NavLink>


    <NavLink to="/about" exact style={link} activeStyle={{
      background: 'darkblue'
    }}>About</NavLink>

    <NavLink to="/login" exact style={link} activeStyle={{
      background: 'darkblue'
    }}>Login</NavLink>

    <NavLink to="/signup" exact style={link} activeStyle={{
      background: 'darkblue'
    }}>signup</NavLink>

    <NavLink to="/messages" exact style={link} activeStyle={{
      background: 'darkblue'
    }}>messages</NavLink>


  </div>




ReactDOM.render((
  <Router>
    <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={signup} />
    <Route exact path="/messages" component={messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
