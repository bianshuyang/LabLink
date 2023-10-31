import * as React from "react";
import { Link } from "react-router-dom";
import { LabLinkContext } from "../LabLinkProvider";

export default function Navbar(){

  const { isLoggedIn, setIsLoggedIn } = React.useContext(LabLinkContext);

  return(
    <nav className="site-nav mb-5">
      <div className="pb-2 top-bar mb-3">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-6 col-lg-9">
              <Link to={'/Contact'} className="small mr-3"><span className="icon-question-circle-o mr-2"></span> <span className="d-none d-lg-inline-block">Contact us</span></Link>
              <Link to={'/'} className="small mr-3"><span className="icon-phone mr-2"></span> <span className="d-none d-lg-inline-block"></span></Link>
              <Link to={'/'} className="small mr-3"><span className="icon-envelope mr-2"></span> <span className="d-none d-lg-inline-block"></span></Link>
            </div>
            {isLoggedIn ?
              <div className="col-6 col-lg-3 text-right user-menu">
                <button className="user-button">
                  User Name (Profile Picture)
                </button>
                <div className="user-options">
                  <Link to={'/profile'} className="small">
                    <span></span>
                    Profile
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
            <li><Link to={'/SingleProf'}>Single Professor</Link></li>
            <li><Link to={'/News'}>Projects</Link></li>
            <li><Link to={'/News'}>Events</Link></li>
            <li><Link to={'/'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li><Link to={'/Forum'}>Forum</Link></li>
        </ul>

            <Link to={'/News'} className="btn-book btn btn-secondary btn-sm menu-absolute">Explore Now</Link>

            <Link to={'/'} className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
              <span></span>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}