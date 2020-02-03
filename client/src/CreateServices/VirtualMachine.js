import React from 'react';
import { connect } from 'react-redux';

import { Form, Dropdown } from 'semantic-ui-react';
import { userActions } from '../_actions/user.actions.js';
import NavBar from '../_components/NavBar';
import SideBar from '../_components/SideBar';
import InputTextField from '../_components/_formcomponents/InputTextField';
import DropdownSelect from '../_components/_formcomponents/DropdownSelect';

class VirtualMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      awsType: 'EC2',
      azureFields: [
        {
          placeholder: 'Resource group',
          name: 'Resource group',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Virtual machine name',
          name: 'Virtual machine name',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Location',
          name: 'Location',
          input_type: 'dropdown',
          required: true,
          values: [
            { value: 'centralus', text: 'Central US' },
            { value: 'northus', text: 'North US' },
          ],
        },
        {
          placeholder: 'Ex: Linux',
          name: 'OS Type',
          input_type: 'text',
          required: true,
        },
      ],
      awsEC2Fields: [
        {
          placeholder: 'Machine Image Id',
          name: 'Machine Image Id',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Instance Type',
          name: 'Instance Type',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Virtual Private Cloud (Network)',
          name: 'Virtual Private Cloud (Network)',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Subnet',
          name: 'Subnet',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Virtual machine name',
          name: 'Virtual machine name',
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
      awsECSFields: [
        {
          placeholder: 'Machine Image Id',
          name: 'Machine Image Id',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Instance Type',
          name: 'Instance Type',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Virtual Private Cloud (Network)',
          name: 'Virtual Private Cloud (Network)',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Subnet',
          name: 'Subnet',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Virtual machine name',
          name: 'Virtual machine name',
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
      gcpFields: [
        {
          placeholder: 'Instance Name',
          name: 'Instance Name',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Machine Configuration',
          name: 'Machine Configuration',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Location',
          name: 'Location',
          input_type: 'dropdown',
          required: true,
          values: [
            { value: 'asia-east1', text: 'Changhua County, Taiwan' },
            { value: 'asia-east2', text: 'Hong Kong' },
            { value: 'asia-northeast1', text: 'Tokyo, Japan' },
            { value: 'asia-northeast2', text: 'Osaka, Japan' },
            { value: 'asia-southeast1', text: 'Jurong West, Singapore' },
            { value: 'australia-southeast1', text: 'Sydney, Australia' },
            { value: 'europe-north1', text: 'Hamina, Finland' },
            { value: 'europe-west1', text: 'St. Ghislain, Belgium' },
            { value: 'europe-west2', text: 'London, England, UK' },
            { value: 'europe-west3', text: 'Frankfurt, Germany' },
            { value: 'europe-west4', text: 'Eemshaven, Netherlands' },
            { value: 'europe-west6', text: 'Zürich, Switzerland' },
            {
              value: 'northamerica-northeast1',
              text: 'Montréal, Québec, Canada',
            },
            { value: 'southamerica-east1', text: 'São Paulo, Brazil' },
            { value: 'us-central1', text: 'Council Bluffs, Iowa, USA' },
            { value: 'us-east1', text: 'Moncks Corner, South Carolina, USA' },
            { value: 'us-east4', text: 'Ashburn, Northern Virginia, USA' },
            { value: 'us-west1', text: 'The Dalles, Oregon, USA' },
            { value: 'us-west2', text: 'Los Angeles, California, USA' },
          ],
        },
        {
          placeholder: 'Ex: Linux',
          name: 'OS Image',
          input_type: 'text',
          required: true,
        },
      ],
    };

    this._handleChange = this._handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeSelectedDashboardService = this.changeSelectedDashboardService.bind(
      this,
    );
    this.handleChangeEngine = this.handleChangeEngine.bind(this);
  }

  componentWillMount() {
    this.setState({
      provider: localStorage.getItem('currentProvider'),
    });
  }

  submitForm(event) {
    event.preventDefault();
    if (this.state.provider === 'aws') {
      const {
        azureFields,
        awsEC2Fields,
        awsECSFields,
        gcpFields,
        ...inputFields
      } = this.state;
      this.props.dispatch(userActions.createVirtualMachine(inputFields));
    } else {
      const {
        azureFields,
        awsEC2Fields,
        awsECSFields,
        gcpFields,
        awsType,
        ...inputFields
      } = this.state;
      this.props.dispatch(userActions.createVirtualMachine(inputFields));
    }
  }

  _handleChange(event, { name, value }) {
    this.setState({
      [name]: value,
    });
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

  handleChangeEngine(event, { value }) {
    this.setState({
      awsType: value,
    });
  }

  render() {
    const {
      azureFields,
      awsEC2Fields,
      awsECSFields,
      gcpFields,
      showSideBar,
      provider,
      awsType,
    } = this.state;
    let awsFields;
    awsFields = awsType === 'EC2' ? awsEC2Fields : awsECSFields;
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
            <h1>Virtual Machine </h1>
            {provider === 'azure' && (
              <Form onSubmit={this.submitForm}>
                {azureFields.map((form) => {
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
            )}
            {provider === 'aws' && (
              <div>
                <Dropdown
                  style={{ padding: 12 }}
                  placeholder="Select Type"
                  inline
                  options={[
                    {
                      key: 'EC2',
                      text: 'EC2',
                      value: 'EC2',
                    },
                    {
                      key: 'ECS',
                      text: 'ECS',
                      value: 'ECS',
                    },
                  ]}
                  onChange={this.handleChangeEngine}
                  defaultValue={awsType}
                />
                <Form onSubmit={this.submitForm}>
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
              <Form onSubmit={this.submitForm}>
                {gcpFields.map((form) => {
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

const connectedVirtualMachine = connect(mapStateToProps)(VirtualMachine);
export { connectedVirtualMachine as VirtualMachine };
