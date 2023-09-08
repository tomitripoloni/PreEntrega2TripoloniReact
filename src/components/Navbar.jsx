import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import CartWidget from './CartWidget';

const Navbar = ({}) => {
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold', 
  };

  return (
    <nav className="navbar navbar-red">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" style={linkStyle}>
            Trise Original
          </Link>
        </div>
        <div className="navbar-categories">
          <ul>
            <li>
              <Link to="/gorras" style={linkStyle}>
                Gorras
              </Link>
            </li>
            <li>
              <Link to="/remeras" style={linkStyle}>
                Remeras
              </Link>
            </li>
            <li>
              <Link to="/zapatillas" style={linkStyle}>
                Zapatillas
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
