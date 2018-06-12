import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

const Nav = ({ classname }) => {
  return (
    <nav className={`nav ${classname}`}>
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link className="nav-list-item-link" to="/">
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Home"
              >
                Home
              </span>
            </span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/captions" className="nav-list-item-link">
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Captions"
              >
                Captions
              </span>
            </span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="nav-list-item-link" to="/werken">
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Werken"
              >
                Werken
              </span>
            </span>
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="nav-list-item-link" to="/account">
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Account"
              >
                Account
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
