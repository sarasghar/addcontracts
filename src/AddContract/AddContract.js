import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

class AddContract extends Component {
  constructor(props) {
    super(props);
    this.employeeNameRef = React.createRef();
    this.startDateRef = React.createRef();
    this.endDateRef = React.createRef();
    this.descriptionRef = React.createRef();
  }
  state = {
    contracts: [],
  };

  formSubmit = (e) => {
    e.preventDefault();
    console.log("employee name ref val: " + this.employeeNameRef.current.value);
    console.log("Start Date ref val: " + this.startDateRef.current.value);
    console.log("End Date ref val: " + this.endDateRef.current.value);
    console.log("Description ref val: " + this.descriptionRef.current.value);

    const newObj = {
      employee_name: this.employeeNameRef.current.value,
      start_date: this.startDateRef.current.value,
      end_date: this.endDateRef.current.value,
      description: this.descriptionRef.current.value,
    };

    this.setState(
      {
        contracts: this.state.contracts.concat(newObj),
      },
      () => console.log(this.state.contracts)
    );

    this.addForm.reset();
  };

  deleteContractHandler = (contractIndex) => {
    const contracts = this.state.contracts;
    contracts.splice(contractIndex, 1);
    this.setState({ contracts });
    console.log(this.state.contracts);
  };

  render() {
    const formStyle = {
      color: "black",
      backgroundColor: "#d3d3d3",
      padding: "10px",
      width: "500px",
    };
    const { contracts } = this.state;
    return (
      <div>
        <Form
          style={formStyle}
          onSubmit={this.formSubmit}
          ref={(input) => (this.addForm = input)}
        >
          <Form.Group>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name.."
              value={this.state.contracts.employee_name}
              ref={this.employeeNameRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="ABC"
              value={this.state.contracts.start_date}
              ref={this.startDateRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="ABC"
              value={this.state.contracts.end_date}
              ref={this.endDateRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contract Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={this.state.contracts.description}
              ref={this.descriptionRef}
            />
          </Form.Group>
          <button type="submit">Add Contract</button>
        </Form>
        <Table striped bordered hover size="sm">
          {contracts.length > 0 ? (
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Contract Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th></th>
              </tr>
            </thead>
          ) : (
            ""
          )}
          <tbody>
            {contracts.map((contract, index) => {
              return (
                <tr key={index}>
                  <td>{contract.employee_name}</td>
                  <td>{contract.description}</td>
                  <td>{contract.start_date}</td>
                  <td>{contract.end_date}</td>
                  <td>
                    <button onClick={() => this.deleteContractHandler(index)}>
                      DeleteContract
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default AddContract;
