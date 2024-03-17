import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
export default function Navbarr() {
  return (
    <div className="mb-5 flex justify-center">
      <nav className="fixed-top navbar navbar-expand-lg custom-navbar-color mb-4">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="/about">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}