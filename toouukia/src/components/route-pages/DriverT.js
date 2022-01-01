import React, { Component } from 'react'
import DriverForm from '../DriverForm';
import DriverTable from '../DriverTable';
import ADriver from '../aDriver';
import Noti1 from './Noti1';
import { useTranslation } from 'react-i18next';
export default class DriverT extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
      isActive2: false,
      username: "",
      password: "",
      car: "",
      aDriver: "",
      items: [],
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      username: this.state.username,
      password: this.state.password,
      car: this.state.car,
      aDriver: this.state.aDriver
    });
    this.setState({
      items,
      username: "",
      password: "",
    });
    alert("Driver Added Succesfully")
    this.handleToggle()
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
  handleToggle2 = () => {
    this.setState({ isActive2: !this.state.isActive2 });
  };
  render() {
    return (
      <div>
        <div className="title">
          <div className="t-txt">
            <p>Drivers List</p>
          </div>
          <div className="tIcon">
            <label className="addi" onClick={this.handleToggle}>
              Add New Driver
            </label>
            <label className="addi">Search</label>
          </div>
        </div>
        <DriverTable items={this.state.items} />
        {this.state.isActive ? (
          <DriverForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            newUsername={this.state.username}
            newPassword={this.state.password}
          />
        ) : null}
        {this.state.isActive2 ? (
          <ADriver
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            newUsername={this.state.username}
            newPassword={this.state.password}
          />
        ) : null}
        <Noti1 />
      </div>
    );
  }
}
