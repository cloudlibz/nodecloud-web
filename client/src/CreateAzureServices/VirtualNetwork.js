import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions/user.actions.js";
// import "./HomePage.css";
// import ServiceTable from "./ServiceTable";
import NavBar from "../_components/NavBar";
import SideBar from "../_components/SideBar";
import { Loader, Modal, Form } from "semantic-ui-react";
import InputTextField from "../_components/_formcomponents/InputTextField";
import DropdownSelect from "../_components/_formcomponents/DropdownSelect";

class VirtualNetwork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        {
          placeholder: "Resource group",
          name: "Resource group",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Virtual network name",
          name: "Virtual network name",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Subnet name",
          name: "Subnet name",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Security group name",
          name: "Security group name",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Loadbalancer name",
          name: "Loadbalancer name",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Location",
          name: "Location",
          input_type: "dropdown",
          required: true,
          values: [
            { value: "centralus", text: "Central US" },
            { value: "northus", text: "North US" }
          ]
        },
        {
          placeholder: "10.1.0.0 - 10.1.255.255",
          name: "Address Space",
          input_type: "text",
          required: true
        }
      ]
    };

    this._handleChange = this._handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this
    );
  }

  componentWillMount() {
    this.state.provider = localStorage.getItem("currentProvider");
  }

  submitForm(event) {
    const { fields, ...inputFields } = this.state;
    event.preventDefault();
    this.props.dispatch(userActions.createVirtualNetwork(inputFields));
  }

  _handleChange(event, { name, value }) {
    this.setState({
      [name]: value
    });
  }

  handleServiceChange(serviceName) {
    this.setState({
      selectedService: serviceName
    });
    this.props.dispatch(userActions.getAll(serviceName));
  }

  handleShowSideBar() {
    this.setState({
      showSideBar: !this.state.showSideBar
    });
  }

  changeSelectedDashboardService(serviceName) {
    this.setState({
      selectedDashboardService: serviceName
    });
  }

  render() {
    const {
      fields,
      selectedService,
      showModal,
      virtualMachine,
      showSideBar,
      provider
    } = this.state;
    return (
      <div>
        <NavBar
          handleCreateModal={() => this.handleCreateModal()}
          handleShowSideBar={() => this.handleShowSideBar()}
        />
        <div style={{ margin: 20 }}>
          {showSideBar && (
            <SideBar
              changeSelectedDashboardService={serviceName =>
                this.changeSelectedDashboardService(serviceName)
              }
            />
          )}
          <div
            // style={{
            //   position: "fixed",
            //   left: showSideBar ? 260 : 0,
            //   right: 0,
            //   top: "65px",
            //   right: 0
            // }}
            style={{
              margin: 50,
              width: "50%",
              marginLeft: showSideBar ? 250 : 0
            }}
          >
            <div
            //   style={{
            //     maxWidth: "400px",
            //     margin: "auto",
            //     marginTop: "20px",
            //     padding: "20px",
            //     boxShadow: "0 0 10px rgba(169, 169, 169, 0.33)",
            //     borderRadius: "5px"
            //   }}
            >
              <h1>Virtual Network </h1>
              {provider === "azure" ? (
                <Form onSubmit={this.submitForm}>
                  {fields.map(form => {
                    if (form.input_type === "text") {
                      return (
                        <InputTextField
                          name={form.name}
                          placeholder={form.placeholder}
                          required={form.required}
                          key={form.placeholder}
                          _handleChange={this._handleChange}
                        />
                      );
                    }
                    if (form.input_type === "dropdown") {
                      return (
                        <DropdownSelect
                          name={form.name}
                          placeholder={form.placeholder}
                          required={form.required}
                          val={form.values}
                          key={form.placeholder}
                          _handleChange={this._handleChange}
                        />
                      );
                    }
                  })}
                  <div
                    class="actions"
                    style={{
                      textAlign: "right",
                      marginTop: "10px"
                    }}
                  >
                    <div
                      style={{ marginTop: "10px" }}
                      class="ui positive right labeled icon button"
                      onClick={this.submitForm}
                    >
                      Create
                      <i class="checkmark icon" />
                    </div>
                  </div>
                </Form>
              ) : (
                <div> {provider} is under development</div>
              )}
            </div>
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

const connectedVirtualNetwork = connect(mapStateToProps)(VirtualNetwork);
export { connectedVirtualNetwork as VirtualNetwork };
