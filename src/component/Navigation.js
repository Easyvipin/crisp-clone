import React from "react";
import { Link } from "react-router-dom";
import logo from "../crispimage/crisp1.png";
const Navigation = () => {
  const handleNav = () => {
    console.log("called");
    document.querySelector(".nav-list").classList.toggle("active");
    document.querySelector(".ham-menu").classList.toggle("active-menu");
  };

  const handleHover = (dropdown) => {
    document.querySelector(".Community").classList.remove("active-dropdown");
    document.querySelector(".Products").classList.remove("active-dropdown");
    document.querySelector(`.${dropdown}`).classList.add("active-dropdown");
  };
  const handleOut = () => {
    document.querySelector(".Community").classList.remove("active-dropdown");
    document.querySelector(".Products").classList.remove("active-dropdown");
  };

  return (
    <nav className="container-full navigation">
      <button className="ham-menu active-menu" onClick={handleNav}>
        <i className=" fa fa-ellipsis-h"></i>
      </button>

      <ul className="content-65 nav-list">
        <li className="each-nav">
          <Link to="/">
            <img src={logo} class="logo-nav" alt="Crisp.io" />
          </Link>
        </li>
        <li className="each-nav cross" onClick={handleNav}>
          <Link>&times;</Link>
        </li>
        <li
          className="each-nav dropdown"
          data-toggle="Products"
          onMouseOver={() => handleHover("Products")}
          onMouseOut={handleOut}
        >
          <Link>
            Products
            <span class="down-icon">
              <i class="fas fa-caret-down"></i>
            </span>
          </Link>
          <div className="Products">
            <Link>INTELLIGENT CAPITAL RAISING</Link>
          </div>
        </li>
        <li className="each-nav ">
          <Link>
            <i class="fas fa-circle"></i> Media
          </Link>
        </li>
        <li
          className="each-nav dropdown"
          data-toggle="Community"
          onMouseOver={() => handleHover("Community")}
          onMouseOut={handleOut}
        >
          <Link>
            Community
            <span class="down-icon">
              <i class="fas fa-caret-down"></i>
            </span>
          </Link>
          <div className="Community">
            <Link>Whitepaper | Raising Amidst Covid19</Link>
            <Link>Fintech Investor Round Table</Link>
            <Link>Venture Investment Summit</Link>
            <Link>Virtual Business Summit</Link>
            <Link>FAQs</Link>
            <Link>PODCAST</Link>
            <Link>EVENTS</Link>
          </div>
        </li>
        <li className="each-nav ">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="each-nav ">
          <Link to="/auth">SIGN IN</Link>
        </li>
        <li className="each-nav nav-btn">
          <Link>GET STARTED</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
