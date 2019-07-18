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

class VirtualMachine extends React.Component {
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
          placeholder: "Virtual machine name",
          name: "Virtual machine name",
          input_type: "text",
          required: true
        },
        {
          placeholder: "Region",
          name: "region",
          input_type: "dropdown",
          required: true,
          values: [
            { value: "centralus", text: "Central US" },
            { value: "northus", text: "northus" }
          ]
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleServiceCreate = this.handleServiceCreate.bind(this);
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this
    );
  }

  submitForm(event) {
    const { fields, ...inputFields } = this.state;
    console.log(inputFields);
    event.preventDefault();
  }

  _handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
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
        [name]: value
      }
    });
  }

  handleDeleteService(name) {
    this.props.dispatch(userActions.delete(name));
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
      showSideBar
    } = this.state;
    return (
      <div>
        <NavBar
          handleCreateModal={() => this.handleCreateModal()}
          handleShowSideBar={() => this.handleShowSideBar()}
        />
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
                <Form>
                  <Form.Input
                    fluid
                    name="resourceGroupName"
                    label="Resource group"
                    placeholder="Resource group"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    name="vmName"
                    label="Virtual machine name"
                    placeholder="Virtual machine name"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    name="location"
                    label="Region"
                    placeholder="Region"
                    onChange={this.handleChange}
                  />
                </Form>
              </div>
            </div>
            <div class="actions">
              <div
                class="ui positive right labeled icon button"
                onClick={this.handleServiceCreate}
              >
                Create Service
                <i class="checkmark icon" />
              </div>
            </div>
          </Modal>

          {showSideBar && (
            <SideBar
              changeSelectedDashboardService={serviceName =>
                this.changeSelectedDashboardService(serviceName)
              }
            />
          )}
          <div style={{ margin: 50 }}>
            <h1>Virtual Machine </h1>
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
              <input type="submit" />
            </Form>
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

const connectedVirtualMachine = connect(mapStateToProps)(VirtualMachine);
export { connectedVirtualMachine as VirtualMachine };
