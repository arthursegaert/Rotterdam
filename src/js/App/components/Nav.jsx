import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Nav.css";

const Nav = ({ classname }) => {
  return (
    <nav className={`nav ${classname}`}>
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink
            activeClassName="nav-list-item-link-active"
            className="nav-list-item-link"
            to="/"
          >
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Home"
              >
                Home
              </span>
            </span>
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            activeClassName="nav-list-item-link-active"
            to="/captions"
            className="nav-list-item-link"
          >
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Captions"
              >
                Captions
              </span>
            </span>
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            activeClassName="nav-list-item-link-active"
            className="nav-list-item-link"
            to="/werken"
          >
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Werken"
              >
                Werken
              </span>
            </span>
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            activeClassName="nav-list-item-link-active"
            className="nav-list-item-link"
            to="/account"
          >
            <span className="nav-list-item-link-title">
              <span
                className="nav-list-item-link-title-inner"
                data-hover="Account"
              >
                Account
              </span>
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
