import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class ServiceTable extends Component {
  renderTableData() {
    if (this.props.service) {
      return this.props.service.map((service, index) => {
        const { id, serviceid, name, type, location } = service; //destructuring
        return (
          <Table.Row key={id}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{serviceid}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell>{location}</Table.Cell>
          </Table.Row>
        );
      });
    }
  }

  renderTableHeader() {
    const header = Object.keys(this.props.service[0]);
    return header.map((key, index) => {
      return (
        <Table.HeaderCell key={index}>{key.toUpperCase()}</Table.HeaderCell>
      );
    });
  }

  render() {
    return (
      <div>
        {this.props.service && (
          <Table id="users">
            <Table.Header>
              <Table.Row>{this.renderTableHeader()}</Table.Row>
            </Table.Header>
            <Table.Body>{this.renderTableData()}</Table.Body>
          </Table>
        )}
      </div>
    );
  }
}

export default ServiceTable;
