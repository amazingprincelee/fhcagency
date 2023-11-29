import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.jpg'

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-bg-purple text-light" style={{ backgroundColor: '#232c57' }}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavOpen ? "show" : ""} collapse navbar-collapse`}
          id="navbarSupportedContent"
        >
          <img src={logo} alt="Logo" />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-light"
                aria-current="page"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "16px", margin: "10px" }}
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* 11 links spread into 4 columns */}
                <div className="row">
                  <div className="col">
                    <li><Link to="/CWSN" className="dropdown-item" onClick={handleLinkClick}>Children with Special Needs</Link></li>
                    <li><Link to="/CCBS" className="dropdown-item" onClick={handleLinkClick}>Children with challenging behaviour services</Link></li>
                    <li><Link to="/CPDS" className="dropdown-item" onClick={handleLinkClick}>Children with physical disabilities services</Link></li>
                  </div>
                  <div className="col">
                    <li><Link to="/DCS" className="dropdown-item" onClick={handleLinkClick}>Domiciliary care services</Link></li>
                    <li><Link to="/STR" className="dropdown-item" onClick={handleLinkClick}>Short term/respite</Link></li>
                    <li><Link to="/PC" className="dropdown-item" onClick={handleLinkClick}>Parliative Care</Link></li>
                  </div>
                  <div className="col">
                    <li><Link to="/MHS" className="dropdown-item" onClick={handleLinkClick}>Mental Health Services</Link></li>
                    <li><Link to="/ECS" className="dropdown-item" onClick={handleLinkClick}>Elderly Care Services</Link></li>
                    <li><Link to="/EOLC" className="dropdown-item" onClick={handleLinkClick}>End-Of-Life Care</Link></li>
                  </div>
                  <div className="col">
                    <li><Link to="/SS" className="dropdown-item" onClick={handleLinkClick}>Specialist Services</Link></li>
                    <li><Link to="/CDUMHA" className="dropdown-item" onClick={handleLinkClick}>Children with detention under MHA</Link></li>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="/#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "16px", margin: "10px" }}
              >
                Supported Living
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* 11 links spread into 4 columns */}
                <div className="row">
                  <div className="col">
                    <li><Link to="/WCU" className="dropdown-item" onClick={handleLinkClick}>Why choose us</Link></li>
                    <li><Link to="/OWP" className="dropdown-item" onClick={handleLinkClick}>Our working principles</Link></li>
                    <li><Link to="/OP" className="dropdown-item" onClick={handleLinkClick}>Our priorities</Link></li>
                  </div>
                  <div className="col">
                    <li><Link to="/IAOA" className="dropdown-item" onClick={handleLinkClick}>Indoors and outdoors activivites</Link></li>
                    <li><Link to="/OF" className="dropdown-item" onClick={handleLinkClick}>Our facilities</Link></li>
                    <li><Link to="/HWW" className="dropdown-item" onClick={handleLinkClick}>How we work</Link></li>
                  </div>
                  
                </div>
              </ul>
            </li>
            <li className="nav-item">
              <a
                href="https://www.cqc.org.uk/provider/1-9934731608 "
                target="blank"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
                onClick={handleLinkClick} 
              >
                CQC
              </a>
            </li>
            <li className="nav-item">
            <a
                href="http://fhcagency.co.uk/register.php "
                alt="register"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
              >
                Register
              </a>
            </li>
            <li className="nav-item">
            <a
                href="http://fhcagency.co.uk/mail.php"
                alt="contact us"
                className="nav-link text-light"
                style={{ fontSize: "16px", margin: "10px" }}
              >
                Contact us
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
