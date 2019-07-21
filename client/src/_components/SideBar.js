import React, { Component } from "react";
import "./SideBar.css";
import { history } from "../_helpers/history.js";

class SideBar extends Component {
  constructor(props) {
    super(props);
    // this._child = React.createRef();
    this.state = { visible: true };
    this.navActiveState = true;
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this
    );
  }

  changeSelectedDashboardService(serviceName) {
    history.push(`/${serviceName}`);
    this.props.changeSelectedDashboardService(serviceName);
  }

  render() {
    return (
      <div>
        <div
          class={
            this.state.visible
              ? "ui sidebar vertical left menu overlay visible navActive"
              : "ui sidebar vertical left menu overlay visible"
          }
          // display="none"
        >
          <div class="ui accordion">
            <a class="item" onClick={() => history.push("/home")}>
              <b>Home</b>
            </a>
            <a
              class="item"
              onClick={() =>
                this.changeSelectedDashboardService("virtualmachines")
              }
            >
              Virtual Machines
            </a>
            <a
              class="item"
              onClick={() =>
                this.changeSelectedDashboardService("virtualnetworks")
              }
            >
              Virtual Networks
            </a>
            <a
              class="item"
              onClick={() => this.changeSelectedDashboardService("database")}
            >
              Database
            </a>
            <a
              class="item"
              onClick={() =>
                this.changeSelectedDashboardService("loadbalancers")
              }
            >
              Load Balancers
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
