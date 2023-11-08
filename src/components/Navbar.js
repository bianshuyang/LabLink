import * as React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { LabLinkContext } from "../LabLinkProvider";

import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Navbar(){

  const { isLoggedIn, setIsLoggedIn } = React.useContext(LabLinkContext);
  const { netID } = React.useContext(LabLinkContext)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <nav className="site-nav mb-5">
      <div className="pb-2 top-bar mb-3">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-lg-9">
              <Link to={'/Contact'} className="small mr-3">
                <span className="icon-question-circle-o mr-2"></span>
                <span className="d-none d-lg-inline-block">Contact us</span>
              </Link>
              <Link to={'/'} className="small mr-3"><span className="icon-phone mr-2"></span>+1(404) 727-6123<span className="d-none d-lg-inline-block"></span></Link>
              <Link to={'/'} className="small mr-3"><span className="icon-envelope mr-2"></span>jeff.epstein@emory.edu<span className="d-none d-lg-inline-block"></span></Link>
            </div>
            {isLoggedIn ?
              <div className="col-6 col-lg-3 text-right user-menu">
                <button className="user-button">
                   { netID } <span className="icon-person"></span>
                </button>
                <div className="user-options">
                  <Link to={'/profile'} className="small">
                    <span className="icon-person menu-person"></span>
                    <span className="profile-text">Profile</span>
                  </Link>
                  <Link to={'/'} onClick={() => setIsLoggedIn(!isLoggedIn)} className="small">
                    <span className="icon-lock"></span>
                    <span className="log-out-text">Log Out</span>
                  </Link>
                </div>
              </div>
              :
              <div className="col-6 col-lg-3 text-right">
                <Link to={'/login'} className="small mr-3">
                  <span className="icon-lock"></span>
                  Log In
                </Link>
                <Link to={'/register'} className="small">
                  <span className="icon-person"></span>
                  Register
                </Link>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="sticky-nav js-sticky-header">
        <div className="container position-relative">
          <div className="site-navigation text-center">
            <Link to={'/'} className="logo menu-absolute m-0">LabLink!<span className="text-primary">.</span></Link>

          <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Professors'}>Professors</Link></li>
            <li><Link to={'/Projects'}>Projects</Link></li>
            <li><Link to={'/News'}>Events</Link></li>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li><Link to={'/Forum'}>Forum</Link></li>
        </ul>

        <div className="burger ml-auto float-right site-menu-toggle d-inline-block d-lg-none light" onClick={handleShow}>
          <span className="burger-lines"></span>
        </div>

      </div>

      <>
        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <h1>Menu</h1>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to={'/'}><h2>Home</h2></Link>
            <Link to={'/Professors'}><h2>Professors</h2></Link>
            <Link to={'/Projects'}><h2>Projects</h2></Link>
            <Link to={'/News'}><h2>Events</h2></Link>
            <Link to={'/'}><h2>About</h2></Link>
            <Link to={'/Contact'}><h2>Contact</h2></Link>
            <Link to={'/Forum'}><h2>Forum</h2></Link>
          </Offcanvas.Body>
        </Offcanvas>
      </>

        </div>
      </div>
    </nav>
  )
}
