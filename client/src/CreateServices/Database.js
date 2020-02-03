import React from 'react';
import { connect } from 'react-redux';

import { Form, Dropdown } from 'semantic-ui-react';
import { userActions } from '../_actions/user.actions.js';
import NavBar from '../_components/NavBar';
import SideBar from '../_components/SideBar';
import InputTextField from '../_components/_formcomponents/InputTextField';
import DropdownSelect from '../_components/_formcomponents/DropdownSelect';

class Database extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      awsType: 'RDS',
      azureFields: [
        {
          placeholder: 'Resource group',
          name: 'Resource group',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Server name',
          name: 'Server name',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Database name',
          name: 'Database name',
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
          placeholder: 'Administrator Login',
          name: 'Administrator Login',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Administrator Password',
          name: 'Administrator Password',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Ex: 1.0',
          name: 'Version',
          input_type: 'text',
          required: true,
        },
      ],
      awsDynamoDBFields: [
        {
          placeholder: 'Dynamo Database name',
          name: 'Database name',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Ex: 1.0',
          name: 'DB Engine Version',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Ex: db.t2.small',
          name: 'DB Instance Class',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Master username',
          name: 'Master username',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Master password',
          name: 'Master password',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Virtual Private Cloud (VPC)',
          name: 'Virtual Private Cloud (VPC)',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Subnet group',
          name: 'Subnet group',
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
      awsRDSFields: [
        {
          placeholder: 'RDS Database name',
          name: 'Database name',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Ex: 1.0',
          name: 'DB Engine Version',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Ex: db.t2.small',
          name: 'DB Instance Class',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Master username',
          name: 'Master username',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Master password',
          name: 'Master password',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Virtual Private Cloud (VPC)',
          name: 'Virtual Private Cloud (VPC)',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Subnet group',
          name: 'Subnet group',
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
          placeholder: 'Database name',
          name: 'Database name',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Administrator Password',
          name: 'Administrator Password',
          input_type: 'text',
          required: true,
        },
        {
          placeholder: 'Ex: 1.0',
          name: 'Database Version',
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
        awsRDSFields,
        awsDynamoDBFields,
        gcpFields,
        ...inputFields
      } = this.state;
      this.props.dispatch(userActions.createDatabase(inputFields));
    } else {
      const {
        azureFields,
        awsRDSFields,
        awsDynamoDBFields,
        gcpFields,
        awsType,
        ...inputFields
      } = this.state;
      this.props.dispatch(userActions.createDatabase(inputFields));
    }
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

  handleChangeEngine(event, { value }) {
    this.setState({
      awsType: value,
    });
  }

  render() {
    const {
      azureFields,
      awsRDSFields,
      awsDynamoDBFields,
      gcpFields,
      showSideBar,
      provider,
      awsType,
    } = this.state;
    let awsFields;
    awsFields = awsType === 'RDS' ? awsRDSFields : awsDynamoDBFields;
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
            <h1> Database </h1>
            {provider === 'azure' && (
              <Form>
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
                      key: 'DynamoDB',
                      text: 'DynamoDB',
                      value: 'DynamoDB',
                    },
                    {
                      key: 'RDS',
                      text: 'RDS',
                      value: 'RDS',
                    },
                  ]}
                  onChange={this.handleChangeEngine}
                  defaultValue={awsType}
                />
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
              <Form>
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

const connectedDatabase = connect(mapStateToProps)(Database);
export { connectedDatabase as Database };
