import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import your components here
import Signup from './components/Signup';
import Login from './components/Login';

const Navbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default Navbar;
