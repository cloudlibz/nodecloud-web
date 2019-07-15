import React, { Component } from "react";
import "./NavBar.css";
import HomePage from "../HomePage/HomePage.js";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    // this._child = React.createRef();
    this.state = { visible: true };
    this.handleShowSideBar = this.handleShowSideBar.bind(this);
  }

  onCreateClick() {
    this.props.handleCreateModal();
  }

  handleShowSideBar() {
    this.props.handleShowSideBar();
  }

  render() {
    return (
      <div>
        <div class="pusher">
          <div class="ui menu asd borderless">
            <a class="item openbtn" onClick={this.handleShowSideBar.bind(this)}>
              <i class="icon content" />
            </a>
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
      </div>
    );
  }
}

export default NavBar;
