import React, { Component } from "react";
import "./NavBar.css";
import HomePage from "../HomePage/HomePage.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    // this._child = React.createRef();
  }

  onCreateClick() {
    this.props.handleCreateModal();
  }

  render() {
    return (
      <div class="pusher">
        <div class="ui menu asd borderless">
          <a class="item openbtn">{/* <i class="icon content" /> */}</a>
          <img src={require("../media/nodecloudlogo.png")} class="nav-logo" />
          <a class="item"> Node Cloud</a>
          <div class="right menu">
            <div class="ui dropdown item">
              Options <i class="dropdown icon" />
              <div class="menu">
                <a class="item">Help</a>
                <a class="item">Logout</a>
              </div>
            </div>
            <div class="item">
              <div
                class="ui primary button"
                onClick={() => this.onCreateClick()}
              >
                Create
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
