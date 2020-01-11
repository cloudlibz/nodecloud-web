import React from 'react';
import { connect } from 'react-redux';

import { Form } from 'semantic-ui-react';
import { userActions } from '../_actions/user.actions.js';
import NavBar from '../_components/NavBar';
import SideBar from '../_components/SideBar';
import InputTextField from '../_components/_formcomponents/InputTextField';
import DropdownSelect from '../_components/_formcomponents/DropdownSelect';

class Security extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      awsFields: [
        {
          placeholder: 'Group name',
          name: 'Group name',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Location',
          name: 'Location',
          input_type: 'dropdown',
          required: true,
          values: [
            { value: 'us-east-1', text: 'US East (N. Virginia)' },
            { value: 'us-east-2', text: 'US East (Ohio)' },
            { value: 'us-west-1', text: 'US West (N. California)' },
            { value: 'us-west-2', text: 'US West (Oregon)' },
            { value: 'ca-central-1', text: 'Canada (Central)' },
            { value: 'eu-central-1', text: 'EU (Frankfurt)' },
            { value: 'eu-west-1', text: 'EU (Ireland)' },
            { value: 'eu-west-2', text: 'EU (London)' },
            { value: 'eu-west-3', text: 'EU (Paris)' },
            { value: 'eu-north-1', text: 'EU (Stockholm)' },
            { value: 'ap-east-1', text: 'Asia Pacific (Hong Kong)' },
            { value: 'ap-northeast-1', text: 'Asia Pacific (Tokyo)' },
            { value: 'ap-northeast-2', text: 'Asia Pacific (Seoul)' },
            { value: 'ap-northeast-3', text: 'Asia Pacific (Osaka-Local)' },
            { value: 'ap-southeast-1', text: 'Asia Pacific (Singapore)' },
            { value: 'ap-southeast-2', text: 'Asia Pacific (Sydney)' },
            { value: 'ap-south-1', text: 'Asia Pacific (Mumbai)' },
            { value: 'sa-east-1', text: 'South America (São Paulo))' },
          ],
        },
      ],
    };

    this._handleChange = this._handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this,
    );
  }

  componentWillMount() {
    this.setState({
      provider: localStorage.getItem('currentProvider'),
    });
  }

  submitForm(event) {
    event.preventDefault();
    const { awsFields, ...inputFields } = this.state;
    this.props.dispatch(userActions.createSecurity(inputFields));
  }

  _handleChange(event, { name, value }) {
    this.setState({
      [name]: value,
    });
  }

  handleServiceCreate(event) {
    this.setState({ showModal: false });
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
    const { awsFields, showSideBar, provider } = this.state;
    return (
      <div>
        <NavBar
          handleCreateModal={() => this.handleCreateModal()}
          handleShowSideBar={() => this.handleShowSideBar()}
        />
        <div style={{ margin: 20 }}>
          {showSideBar && (
            <SideBar
              changeSelectedDashboardService={(serviceName) => this.changeSelectedDashboardService(serviceName)}
            />
          )}
          <div
            style={{
              margin: 50,
              width: '50%',
              marginLeft: showSideBar ? 250 : 0,
            }}
          >
            <h1> Security </h1>
            {provider === 'azure' && (
              <h5>This service is currently not available.</h5>
            )}
            {provider === 'aws' && (
              <div>
                <Form>
                  {awsFields.map((form) => {
                    if (form.input_type === 'text') {
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
                    if (form.input_type === 'dropdown') {
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
                    className="actions"
                    style={{
                      float: 'right',
                    }}
                  >
                    <div
                      style={{ marginTop: '10px' }}
                      className="ui positive right labeled icon button"
                      onClick={this.submitForm}
                    >
                      Create
                      <i className="checkmark icon" />
                    </div>
                  </div>
                </Form>
              </div>
            )}
            {provider === 'gcp' && (
              <h5>This service is currently not available.</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const connectedSecurity = connect(mapStateToProps)(Security);
export { connectedSecurity as Security };
