import React, { Component } from 'react'
import Carform from '../Carform';
import CarTable from '../CarTable';
export default class CarT extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
      name: "",
      model: "",
      plateNum: "",
      items: [],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      name: this.state.name,
      model: this.state.model,
      plateNum: this.state.plateNum,
    });
    this.setState({
      items,
      name: "",
      model: "",
    });
    alert("Car Added Succesfully");
    this.handleToggle();
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    return (
      <div>
        <div className="title">
          <div className="t-txt">
            <p>Cars List</p>
          </div>
          <div className="tIcon">
            <label className="addi" onClick={this.handleToggle}>
              Add New Driver
            </label>
            <label className="addi">Search</label>
          </div>
        </div>
        <CarTable items={this.state.items} />
        {this.state.isActive ? (
          <Carform
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            newname={this.state.name}
            newmodel={this.state.model}
          />
        ) : null}
      </div>
    );
  }
}
