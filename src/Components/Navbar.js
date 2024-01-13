import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-${this.props.mode}-subtle`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                className="mx-5"
                src={logo}
                alt="logo"
                width="120"
                height="100"
              />
            </Link>
            {/* <Link className="navbar-brand" to="/">Update Express</Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item m-3">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item m-3">
                  <Link className="nav-link " to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item m-3">
                  <Link className="nav-link " to="/">
                    Contact
                  </Link>
                </li>

                {/* <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                                        Themes
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li><Link class="dropdown-item 
                                        bg-light-subtle " role='button'>Light Mode</Link></li>
                                        <li><Link class="dropdown-item 
                                        bg-dark-subtle " onClick={() => this.toggleDark()} role='button'>Dark Mode</Link></li>
                                        <li><Link class="dropdown-item bg-danger-subtle" role='button'>Red Mode</Link></li>
                                        <li><Link class="dropdown-item bg-success-subtle" role='button'>Green Mode</Link></li>
                                        <li><Link class="dropdown-item bg-warning-subtle" role='button'>Yellow Mode</Link></li>
                                        <li><Link class="dropdown-item bg-primary-subtle" role='button'>Blue Mode</Link></li>
                                    </ul>
                                </li> */}
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
