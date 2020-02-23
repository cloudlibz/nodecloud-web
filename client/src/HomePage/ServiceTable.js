import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class ServiceTable extends Component {
  constructor() {
    super();
    this.setPageNumber = this.setPageNumber.bind(this);
    this.state = {
      currentPage: 1
    }
  }

  setPageNumber(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  renderTableData(servicesPerPage) {
    if (this.props.service) {
      const indexOfLastService = currentPage * servicesPerPage;
      const indexOfFirstService = indexOfLastService - servicesPerPage;
      const paginatedData = this.props.service.slice(indexOfFirstService, indexOfLastService);
      return paginatedData.map((service, index) => {
        const { id, serviceid, name, type, location } = service; //destructuring
        return (
          <Table.Row key={id}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{serviceid}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell>{location}</Table.Cell>
            <Table.Cell onClick={() => this.onDelete(name)}>
              <i class="trash alternate icon" />
            </Table.Cell>
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

  onDelete(name) {
    this.props.handleDeleteService(name);
  }

  render() {
    let servicesPerPage = 10;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(this.props.service.length / servicesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.setPageNumber}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <ul>{renderPageNumbers}</ul>
        {this.props.service && (
          <Table id="users">
            <Table.Header>
              <Table.Row>{this.renderTableHeader()}</Table.Row>
            </Table.Header>
            <Table.Body>{this.renderTableData(servicesPerPage)}</Table.Body>
          </Table>
        )}
      </div>
    );
  }
}

export default ServiceTable;
