import React from "react";
import { Link } from "react-router-dom";
import logo from "../crispimage/crisp1.png";
const Navigation = () => {
  let allDropdowns = Array.from(document.querySelectorAll(".dropdown"));
  allDropdowns.forEach((item) => {
    item.onmouseover = function () {
      let dropdown = this.dataset.toggle;
      document.querySelector(".Community").classList.remove("active-dropdown");
      document.querySelector(".Products").classList.remove("active-dropdown");
      document.querySelector(`.${dropdown}`).classList.add("active-dropdown");
    };
    item.onmouseout = function () {
      document.querySelector(".Community").classList.remove("active-dropdown");
      document.querySelector(".Products").classList.remove("active-dropdown");
    };
  });

  const handleOut = (e) => {
    console.log(e.target.classList);
  };

  return (
    <nav className="container-full">
      <ul className="content-65 nav-list">
        <li className="each-nav">
          <Link>
            <img src={logo} class="logo-nav" alt="Crisp.io" />
          </Link>
        </li>
        <li className="each-nav dropdown" data-toggle="Products">
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
        <li className="each-nav dropdown" data-toggle="Community">
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
          <Link>Contact</Link>
        </li>
        <li className="each-nav ">
          <Link>SIGN IN</Link>
        </li>
        <li className="each-nav nav-btn">
          <Link>GET STARTED</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
