import * as React from "react";
import { Link } from "react-router-dom";
import { LabLinkContext } from "../LabLinkProvider";
import { useState } from 'react';
import "../styles/navbar.css";
import { useLocation } from 'react-router-dom';
export default function Navbar(){

  const { isLoggedIn, setIsLoggedIn } = React.useContext(LabLinkContext);
  const { netID } = React.useContext(LabLinkContext)
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const location = useLocation();
    
    const checkActive = (path) => location.pathname === path ? 'active' : '';

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
              <Link to={'/'} className="small mr-3">
                <span className="icon-phone mr-2"></span>
                <span className="d-none d-lg-inline-block">(404)727-6123</span>
              </Link>
              <Link to={'/'} className="small mr-3">
                <span className="icon-envelope mr-2"></span>
                <span className="d-none d-lg-inline-block">jeff.epstein@emory.edu</span>
              </Link>
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
                  <span className="icon-lock"> </span>
                   Log In
                </Link>
                <Link to={'/register'} className="small">
                  <span className="icon-person"> </span>
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
            <li className={checkActive('/')}><Link to="/">Home</Link></li>
            <li className={checkActive('/Professors')}><Link to="/Professors">Professors</Link></li>
            <li className={checkActive('/Projects')}><Link to="/Projects">Projects</Link></li>
            <li className={checkActive('/Forum')}><Link to="/Forum">Students Self Recommendations</Link></li>
            <li className={checkActive('/Application')}><Link to="/Application">Programs of Interest</Link></li>
            <li className={checkActive('/News')}><Link to="/News">News</Link></li>
        </ul>


        <div className="burger ml-auto float-right site-menu-toggle d-inline-block d-lg-none light" onClick={toggleMenu}>
          <span className="burger-lines"></span>
        </div>

        <div className={`offcanvas-menu ${showMenu ? 'active' : ''}`}>
            <button className="close-menu" onClick={toggleMenu}>&times;</button>
            <Link to={'/'} onClick={toggleMenu}><h2>Home</h2></Link>
            <Link to={'/Projects'} onClick={toggleMenu}><h2>Projects</h2></Link>
            <Link to={'/Professors'} onClick={toggleMenu}><h2>Professors</h2></Link>
            
            <Link to={'/Forum'} onClick={toggleMenu}><h2>Students Self Recommendations</h2></Link>
            <Link to={'/Application'} onClick={toggleMenu}><h2>Programs of Interest</h2></Link>
            <Link to={'/News'} onClick={toggleMenu }><h2>News</h2></Link>

          </div>


      </div>


        </div>
      </div>
    </nav>
  )
}
