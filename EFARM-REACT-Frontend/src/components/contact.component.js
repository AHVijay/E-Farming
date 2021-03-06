import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
/*
Name:        Contact Cmponent
Child:       None
Parent:      App Component
Description: Component to display contact information of website
*/
export default class Contact extends React.Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand navbar-expand-lg bg-dark">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item2">
                  <Link to="/home" className="nav-link text-white">
                    <b>Home</b>
                  </Link>
                </li>

                <li className="nav-item2">
                  <Link to="/login" className="nav-link text-white">
                    <b>Login</b>
                  </Link>
                </li>

                <li className="nav-item2">
                  <Link to="/about" className="nav-link text-white">
                    <b>About</b>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
      <div className="container">
        <br />
        <br />
        <h2><b>Contact</b></h2>
        <p>We are here to serve your needs 24/7 <br />Remeber, this is a dummy textarea!</p>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <h5>EMAIL</h5>
            <p>contact@farming.com</p>
          </div>
          <div className="col-md-6">
            <h5>PHONE</h5>
            <p>+90 3231322332</p>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
              <textarea rows="1" cols="60" placeholder="Let us know what you think!"/>
              <button className="btn btn-success">SUBMIT</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}