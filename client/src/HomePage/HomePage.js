import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions/user.actions.js';
import './HomePage.css';
import ServiceTable from './ServiceTable';
import NavBar from '../_components/NavBar';
import SideBar from '../_components/SideBar';
import { Loader } from 'semantic-ui-react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedService: localStorage.getItem('currentProvider') || 'azure',
      user: '',
      showModal: false,
      showSideBar: true,
      selectedDashboardService: '',
      virtualMachine: {
        resourceGroupName: '',
        vmName: '',
        location: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleServiceCreate = this.handleServiceCreate.bind(this);
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this,
    );
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
    });
    this.props.dispatch(userActions.getAll(this.state.selectedService));
  }

  handleServiceChange(serviceName) {
    localStorage.setItem('currentProvider', serviceName);
    this.setState({
      selectedService: serviceName,
    });
    this.props.dispatch(userActions.getAll(serviceName));
  }

  handleCreateModal() {
    this.setState({
      showModal: true,
    });
  }

  handleServiceCreate(event) {
    event.preventDefault();
    const { virtualMachine } = this.state;
    this.props.dispatch(userActions.createVM(virtualMachine));
    this.setState({ showModal: false });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { virtualMachine } = this.state;
    this.setState({
      virtualMachine: {
        ...virtualMachine,
        [name]: value,
      },
    });
  }

  handleDeleteService(name) {
    this.props.dispatch(userActions.delete(name));
  }

  handleShowSideBar() {
    this.setState({
      showSideBar: !this.state.showSideBar,
    });
  }

  changeSelectedDashboardService(serviceName) {
    this.setState({
      selectedDashboardService: serviceName,
    });
  }

  render() {
    const { selectedService, showSideBar } = this.state;
    return (
      <div id="site-main">
        <NavBar
          handleCreateModal={() => this.handleCreateModal()}
          handleShowSideBar={() => this.handleShowSideBar()}
        />
        <div style={{ margin: 20, marginLeft: showSideBar ? 250 : 0 }}>
          {showSideBar && (
            <SideBar
              changeSelectedDashboardService={(serviceName) => this.changeSelectedDashboardService(serviceName)}
            />
          )}
          <div id="site-mainContainer">
            <div className="ui center aligned page grid" style={{ marginTop: 50 }}>
              <div
                className="three wide left floated column"
                onClick={() => this.handleServiceChange('azure')}
              >
                <div
                  className="serviceChooser"
                  style={
                    selectedService == 'azure'
                      ? { borderColor: '#00AAFD', boxShadow: 20 }
                      : { borderColor: '#d2d2d2' }
                  }
                >
                  <img
                    src={require('../media/azure.png')}
                    alt="Nodecloud Logo"
                    className="ui small image"
                  />
                  <div className="view_action_service_div">
                    <p>VIEW ACTIVE SERVICES</p>
                  </div>
                </div>
              </div>
              <div
                className="three wide column"
                onClick={() => this.handleServiceChange('aws')}
              >
                <div
                  className="serviceChooser"
                  style={
                    selectedService == 'aws'
                      ? { borderColor: '#00AAFD' }
                      : { borderColor: '#d2d2d2' }
                  }
                >
                  <img
                    src={require('../media/aws.png')}
                    alt="Nodecloud Logo"
                    className="ui small image"
                  />
                  <div className="view_action_service_div">
                    <p>VIEW ACTIVE SERVICES</p>
                  </div>
                </div>
              </div>
              <div
                className="three wide right floated column"
                onClick={() => this.handleServiceChange('gcp')}
              >
                <div
                  className="serviceChooser"
                  style={
                    selectedService == 'gcp'
                      ? { borderColor: '#00AAFD' }
                      : { borderColor: '#d2d2d2' }
                  }
                >
                  <img
                    src={require('../media/gcp.png')}
                    alt="Nodecloud Logo"
                    className="ui small image"
                  />
                  <div className="view_action_service_div">
                    <p>VIEW ACTIVE SERVICES</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ margin: 50 }}>
              {this.props.users.loading && (
                <Loader active inline="centered">
                  Loading
                  {' '}
                  {selectedService}
                  {' '}
services...
                </Loader>
              )}
              {!this.props.users.loading && (
                <ServiceTable
                  service={this.props.users.items}
                  handleDeleteService={(name) => this.handleDeleteService(name)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
