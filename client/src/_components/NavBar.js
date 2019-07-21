import React, { Component } from "react";
import "./NavBar.css";
import { history } from "../_helpers/history.js";
import { Dropdown } from "semantic-ui-react";

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

  getProvider(event, { value }) {
    localStorage.setItem("currentProvider", value);
    window.location.reload();
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    const providerOptions = [
      {
        key: "aws",
        text: "Amazon Web Services",
        value: "aws",
        image: { avatar: true, src: require("../media/aws.png") }
      },
      {
        key: "azure",
        text: "Azure",
        value: "azure",
        image: { avatar: true, src: require("../media/azure.png") }
      },
      {
        key: "gcp",
        text: "Google Cloud Platform",
        value: "gcp",
        image: { avatar: true, src: require("../media/gcp.png") }
      }
    ];
    return (
      <div>
        <div class="pusher">
          <div class="ui menu asd borderless">
            <a class="item openbtn" onClick={this.handleShowSideBar}>
              <i class="icon content" />
            </a>
            <img
              src={require("../media/nodecloudlogo.png")}
              class="nav-logo"
              onClick={() => history.push("/home")}
            />
            <a class="item" onClick={() => history.push("/home")}>
              {" "}
              Node Cloud
            </a>
            <div class="right menu">
              <Dropdown
                style={{ padding: 12 }}
                placeholder="Select Provider"
                inline
                options={providerOptions}
                onChange={this.getProvider}
                defaultValue={localStorage.getItem("currentProvider")}
              />
              <div class="ui dropdown item">
                {user["username"]} <i class="dropdown icon" />
                <div class="menu">
                  <a class="item">Help</a>
                  <a class="item">Logout</a>
                </div>
              </div>
              <div class="item">
                {/* <div
                  class="ui primary button"
                  onClick={() => this.onCreateClick()}
                >
                  Create
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
