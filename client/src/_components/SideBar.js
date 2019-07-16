import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    // this._child = React.createRef();
    this.state = { visible: true };
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this
    );
  }

  changeSelectedDashboardService(serviceName) {
    this.props.changeSelectedDashboardService(serviceName);
  }

  render() {
    return (
      <div>
        <div
          class="ui sidebar vertical left menu overlay visible"
          display="none"
        >
          <div class="ui accordion">
            <a class="item">
              <b>Home</b>
            </a>
            <a
              class="item"
              onClick={() =>
                this.changeSelectedDashboardService("virtualMachines")
              }
            >
              Virtual Machines
            </a>
            <a
              class="item"
              onClick={() =>
                this.changeSelectedDashboardService("virtualNetworks")
              }
            >
              Virtual Networks
            </a>
            <a
              class="item"
              onClick={() =>
                this.changeSelectedDashboardService("loadBalancers")
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
