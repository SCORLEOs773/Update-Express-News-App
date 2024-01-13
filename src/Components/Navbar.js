import React, { Component } from 'react'
import logo from './logo.png';


export default class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg bg-${this.props.mode}-subtle`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img className='mx-5' src={logo} alt="logo" width="120" height="100" />
                        </a>
                        {/* <a className="navbar-brand" href="/">Update Express</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item m-3">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item m-3">
                                    <a className="nav-link " href="#">About</a>
                                </li>
                                <li className="nav-item m-3">
                                    <a className="nav-link " href="#">Contact</a>
                                </li>

                                {/* <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                        Themes
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item 
                                        bg-light-subtle " role='button'>Light Mode</a></li>
                                        <li><a class="dropdown-item 
                                        bg-dark-subtle " onClick={() => this.toggleDark()} role='button'>Dark Mode</a></li>
                                        <li><a class="dropdown-item bg-danger-subtle" role='button'>Red Mode</a></li>
                                        <li><a class="dropdown-item bg-success-subtle" role='button'>Green Mode</a></li>
                                        <li><a class="dropdown-item bg-warning-subtle" role='button'>Yellow Mode</a></li>
                                        <li><a class="dropdown-item bg-primary-subtle" role='button'>Blue Mode</a></li>
                                    </ul>
                                </li> */}

                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
