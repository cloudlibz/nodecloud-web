import React, { Component } from 'react';
import './NavBar.css';
import { Dropdown } from 'semantic-ui-react';
import { history } from '../_helpers/history.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
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
    localStorage.setItem('currentProvider', value);
    window.location.reload();
  }

  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const providerOptions = [
      {
        key: 'aws',
        text: 'Amazon Web Services',
        value: 'aws',
        image: { avatar: true, src: require('../media/aws.png') },
      },
      {
        key: 'azure',
        text: 'Azure',
        value: 'azure',
        image: { avatar: true, src: require('../media/azure.png') },
      },
      {
        key: 'gcp',
        text: 'Google Cloud Platform',
        value: 'gcp',
        image: { avatar: true, src: require('../media/gcp.png') },
      },
    ];
    return (
      <div>
        <div className="pusher">
          <div className="ui menu asd borderless">
            <a href="#!" className="item openbtn" onClick={this.handleShowSideBar}>
              <i className="icon content" />
            </a>
            <img
              alt="Nodecloud logo"
              src={require('../media/nodecloudlogo.png')}
              className="nav-logo"
              onClick={() => history.push('/home')}
            />
            <a href="#!" className="item" onClick={() => history.push('/home')}>
              {' '}
              Node Cloud
            </a>
            <div className="right menu">
              <Dropdown
                style={{ padding: 12 }}
                placeholder="Select Provider"
                inline
                options={providerOptions}
                onChange={this.getProvider}
                defaultValue={localStorage.getItem('currentProvider')}
              />
              <div className="ui dropdown item">
                {user.username}
                {' '}
                <i className="dropdown icon" />
                <div className="menu">
                  <a href="#!" className="item">
                    Help
                  </a>
                  <a href="#!" className="item">
                    Logout
                  </a>
                </div>
              </div>
              <div className="item" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
