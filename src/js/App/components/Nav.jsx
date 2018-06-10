import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

const Nav = () => {
  return (
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list-item">
          <Link class="nav-list-item-link" to="/">
            <span class="nav-list-item-link-title">
              <span class="nav-list-item-link-title-inner" data-hover="Home">
                Home
              </span>
            </span>
          </Link>
        </li>
        <li class="nav-list-item">
          <Link to="/captions" class="nav-list-item-link">
            <span class="nav-list-item-link-title">
              <span
                class="nav-list-item-link-title-inner"
                data-hover="Captions"
              >
                Captions
              </span>
            </span>
          </Link>
        </li>
        <li class="nav-list-item">
          <Link class="nav-list-item-link" to="/werken">
            <span class="nav-list-item-link-title">
              <span class="nav-list-item-link-title-inner" data-hover="Werken">
                Werken
              </span>
            </span>
          </Link>
        </li>
        <li class="nav-list-item">
          <Link class="nav-list-item-link" to="/account">
            <span class="nav-list-item-link-title">
              <span class="nav-list-item-link-title-inner" data-hover="Account">
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
