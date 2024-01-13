import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
      isLoading: false,
    };
  }

  changeTheme(mode) {
    this.setState({ mode });
  }

  render() {
    return (
      <div className={`bg-${this.state.mode}-subtle overflow-hidden`}>
        <Navbar mode={this.state.mode} />
        <hr />
        <div
          className="themeTitle position-absolute top-1 text-info end-0"
          style={{
            marginRight: "170px",
            marginTop: "10px",
            fontWeight: "bolder",
          }}
        >
          THEMES
        </div>

        <div className="position-absolute top-1 end-0 m-5">
          <button
            className={`btn mx-2 btn-light btn-circle ${
              this.state.mode === "light" ? "active" : ""
            }`}
            onClick={() => this.changeTheme("light")}
          >
            L
          </button>

          <button
            className={`btn mx-2 btn-dark btn-circle ${
              this.state.mode === "dark" ? "active" : ""
            }`}
            onClick={() => this.changeTheme("dark")}
          >
            D
          </button>

          <button
            className={`btn mx-2 btn-danger btn-circle ${
              this.state.mode === "danger" ? "active" : ""
            }`}
            onClick={() => this.changeTheme("danger")}
          >
            R
          </button>

          <button
            className={`btn mx-2 btn-success btn-circle ${
              this.state.mode === "success" ? "active" : ""
            }`}
            onClick={() => this.changeTheme("success")}
          >
            G
          </button>

          <button
            className={`btn mx-2 btn-warning btn-circle ${
              this.state.mode === "warning" ? "active" : ""
            }`}
            onClick={() => this.changeTheme("warning")}
          >
            Y
          </button>

          <button
            className={`btn mx-2 btn-primary btn-circle ${
              this.state.mode === "primary" ? "active" : ""
            }`}
            onClick={() => this.changeTheme("primary")}
          >
            B
          </button>
        </div>

        <Routes>
          <Route path="/" element={<News pageSize={12} />} />
        </Routes>
        {/* <News pageSize={12} /> */}
      </div>
    );
  }
}
