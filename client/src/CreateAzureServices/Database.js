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

class Database extends React.Component {
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
          placeholder: "Server name",
          name: "Server name",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Database name",
          name: "Database name",
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
          placeholder: "Administrator Login",
          name: "Administrator Login",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Administrator Password",
          name: "Administrator Password",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Ex: 1.0",
          name: "Version",
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
    this.props.dispatch(userActions.createDatabase(inputFields));
  }

  _handleChange(event, { name, value }) {
    this.setState({
      [name]: value
    });
  }

  handleServiceCreate(event) {
    this.setState({ showModal: false });
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
            style={{
              margin: 50,
              width: "50%",
              marginLeft: showSideBar ? 250 : 0
            }}
          >
            <h1> Database </h1>
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
                    float: "right"
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
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const connectedDatabase = connect(mapStateToProps)(Database);
export { connectedDatabase as Database };
