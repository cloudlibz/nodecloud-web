import React, { Component } from 'react';
import './SideBar.css';
import { history } from '../_helpers/history.js';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.navActiveState = true;
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this,
    );
  }

  changeSelectedDashboardService(serviceName) {
    history.push(`/${serviceName}`);
    this.props.changeSelectedDashboardService(serviceName);
  }

  render() {
    return (
      <div
        className={
          this.state.visible
            ? 'ui sidebar vertical left menu overlay visible navActive'
            : 'ui sidebar vertical left menu overlay visible'
        }
        id="site-sideBar"
      >
        <div className="ui accordion">
          <a href="#!" className="item" onClick={() => history.push('/home')}>
            <b>Home</b>
          </a>
          <a
            href="#!"
            className="item"
            onClick={() => this.changeSelectedDashboardService('virtualmachines')}
          >
            Virtual Machines
          </a>
          <a
            href="#!"
            className="item"
            onClick={() => this.changeSelectedDashboardService('virtualnetworks')}
          >
            Virtual Networks
          </a>
          <a
            href="#!"
            className="item"
            onClick={() => this.changeSelectedDashboardService('database')}
          >
            Database
          </a>
          <a
            href="#!"
            className="item"
            onClick={() => this.changeSelectedDashboardService('storage')}
          >
            Storage
          </a>
          <a
            href="#!"
            className="item"
            onClick={() => this.changeSelectedDashboardService('security')}
          >
            Security
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
