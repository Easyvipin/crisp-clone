import React from "react";
import { Link } from "react-router-dom";
import footerlogo from "../crispimage/footer-logo.png";
import fb from "../crispimage/fb.png";
import insta from "../crispimage/insta.png";
import yt from "../crispimage/yt.png";
const Footer = () => {
  return (
    <footer className="container-full p-6 bg-primary">
      <div className="content-65">
        <button className="">
          <i className="far fa-arrow-alt-circle-up"></i>
        </button>
        <div className="row">
          <div className="col-25">
            <img src={footerlogo} className="logo-nav" alt="" />
          </div>
          <div className="col-75">
            <div className="row">
              <div className="col-50">
                <ul className="crisp-links">
                  <li className="each-link">
                    <Link>Companies - Raising Capital</Link>
                  </li>
                  <li className="each-link">
                    <Link>Companies - Raising Capital</Link>
                  </li>
                  <li className="each-link">
                    <Link>Advisors / Professionals</Link>
                  </li>
                  <li className="each-link">
                    <Link>Podcast</Link>
                  </li>
                  <li className="each-link">
                    <Link>Events</Link>
                  </li>
                  <li className="each-link">
                    <Link>Terms and Conditions</Link>
                  </li>
                  <li className="each-link">
                    <Link>Privacy Policy</Link>
                  </li>
                  <li className="each-link">
                    <Link>Contact Us</Link>
                  </li>
                </ul>
                <ul className="social-links">
                  <li className="each-social">
                    <Link>
                      <img src={fb} alt="" />
                    </Link>
                  </li>
                  <li className="each-social">
                    <Link>
                      <img src={yt} alt="" />
                    </Link>
                  </li>
                  <li className="each-social">
                    <Link>
                      <img src={insta} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-50">
                <h6>CRIISP</h6>
                <p>Powered by Wholesale Investor</p>

                <p>www.wholesaleinvestor.com.au</p>
                <p>info@wholesaleinvestor.com.au</p>

                <p>
                  Level 7,
                  <br /> 60 Pitt St <br /> Sydney NSW 2000
                </p>
                <p>PH: 1300 597 595</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
