import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions/user.actions.js";
import "./HomePage.css";
import ServiceTable from "./ServiceTable";
import { Loader } from "semantic-ui-react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedService: "azure",
      user: ""
    };
  }

  componentDidMount() {
    this.state.user = localStorage.getItem("user");
    this.props.dispatch(userActions.getAll(this.state.selectedService));
  }

  handleServiceChange(serviceName) {
    this.setState({
      selectedService: serviceName
    });
    this.props.dispatch(userActions.getAll(serviceName));
  }

  render() {
    const { selectedService } = this.state;
    return (
      <div style={{ margin: 20 }}>
        <div class="ui center aligned page grid">
          <div class="seven wide column" />
          <div class="two wide column">
            <img
              src={require("../media/nodecloudlogo.png")}
              alt="Nodecloud Logo"
              class="ui small image"
            />
          </div>
          <div class="one wide right floated column">
            <button class="ui secondary button">HELP?</button>
          </div>
        </div>
        <div class="ui center aligned page grid">
          <div class="six wide column">
            <p>
              Node Cloud is a standard library to get a single API on the open
              cloud with multiple providers. Making open cloud easily accessible
              and managed.
            </p>
          </div>
        </div>
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
