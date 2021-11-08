
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo-ramentafraise.png"
import "./navbar.css"

const NavBar = () => {
  return (
    <header>
      <section className="header-banner">
        <div className="title-logo-container">
          <img className="logo" src={logo} alt=""/>
          <div className="header-title">
            <h1>GreenBeens</h1>
            <h2>"Everything you like in 1 click"</h2>
          </div>
        </div> 
        <div className="button-container">
            <button>Login</button>
            <button>MySpace</button>
        </div>    
      </section>
      <nav className="nav-general">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/PageEggs">PageEggs</Link>
          </li>
          <li>
            <Link to="/PageGluten">PageGluten</Link>
          </li>
          <li>
            <Link to="/PageLactose">PageLactose</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cards">Cards</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};


export default NavBar;