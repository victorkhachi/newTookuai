import React, { Component } from 'react'
import Carform from '../Carform';
import CarTable from '../CarTable';
import ADriver from '../aDriver';
import { withTranslation } from "react-i18next";
import Noti1 from './Noti1';

 class CarT extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
      isActive2: false,
      name: "",
      model: "",
      plateNum: "",
      driver: "",
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
      driver: this.state.driver,
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
  handleToggl = () => {
    this.setState({ isActive2: !this.state.isActive2 });
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
              {this.props.t("Ac")}
            </label>
            <label className="addi" onClick={this.handleToggl}>
              {this.props.t("Asd")}
            </label>
            <label className="addi">{this.props.t("Search")}</label>
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
        {this.state.isActive2 ? <ADriver /> : null}
      </div>
    );
  }
}
export  default withTranslation()(CarT)