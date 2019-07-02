import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions/user.actions.js";
import "./HomePage.css";
import ServiceTable from "./ServiceTable";
import NavBar from "./NavBar";
import { Loader, Modal } from "semantic-ui-react";
import $ from "jquery";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedService: "azure",
      user: "",
      showModal: false
    };
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    this.state.user = localStorage.getItem("user");
    this.props.dispatch(userActions.getAll(this.state.selectedService));
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  handleServiceChange(serviceName) {
    this.setState({
      selectedService: serviceName
    });
    this.props.dispatch(userActions.getAll(serviceName));
  }

  handleCreateModal() {
    this.setState({
      showModal: true
    });
  }

  render() {
    const { selectedService, showModal } = this.state;
    return (
      <div>
        <NavBar handleCreateModal={() => this.handleCreateModal()} />
        <div style={{ margin: 20 }}>
          <Modal open={showModal} id="test">
            <i class="close icon" onClick={() => this.closeModal()} />
            <div class="header">
              {/* <div class="ui tiny image">
                <img src={require("../media/azure.png")} />
              </div> */}
              Create
            </div>
            <div class="image content">
              <div class="description">
                <div class="ui header">Choose service type</div>
                Work In Progress
              </div>
            </div>
            <div class="actions">
              <div class="ui positive right labeled icon button">
                Create Service
                <i class="checkmark icon" />
              </div>
            </div>
          </Modal>

          <div class="ui center aligned page grid" />
          <div class="ui center aligned page grid" style={{ marginTop: 50 }}>
            <div
              class="three wide left floated column"
              onClick={() => this.handleServiceChange("azure")}
            >
              <div
                className="serviceChooser"
                style={
                  selectedService == "azure"
                    ? { borderColor: "#00AAFD", boxShadow: 20 }
                    : { borderColor: "#d2d2d2" }
                }
              >
                <img
                  src={require("../media/azure.png")}
                  alt="Nodecloud Logo"
                  class="ui small image"
                />
                <div className="view_action_service_div">
                  <p>VIEW ACTIVE SERVICES</p>
                </div>
              </div>
            </div>
            <div
              class="three wide column"
              onClick={() => this.handleServiceChange("aws")}
            >
              <div
                className="serviceChooser"
                style={
                  selectedService == "aws"
                    ? { borderColor: "#00AAFD" }
                    : { borderColor: "#d2d2d2" }
                }
              >
                <img
                  src={require("../media/aws.png")}
                  alt="Nodecloud Logo"
                  class="ui small image"
                />
                <div className="view_action_service_div">
                  <p>VIEW ACTIVE SERVICES</p>
                </div>
              </div>
            </div>
            <div
              class="three wide right floated column"
              onClick={() => this.handleServiceChange("gcp")}
            >
              <div
                className="serviceChooser"
                style={
                  selectedService == "gcp"
                    ? { borderColor: "#00AAFD" }
                    : { borderColor: "#d2d2d2" }
                }
              >
                <img
                  src={require("../media/gcp.png")}
                  alt="Nodecloud Logo"
                  class="ui small image"
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
                Loading {selectedService} services...
              </Loader>
            )}
            {!this.props.users.loading && (
              <ServiceTable service={this.props.users.items} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
