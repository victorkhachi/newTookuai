import React, { Component } from 'react'

export default class CarTable extends Component {
  render() {
      const items = this.props.items;
    return (
      <div>
        <table className="table table-striped table-hover tb shadow-sm">
          <thead>
            {" "}
            <tr>
              <th scope="col">#</th>
              <th scope="col">Car's Name</th>
              <th scope="col"> Model</th>
              <th scope="col"> Plate  Number</th>{" "}
              <th scope="col">Driver</th>{" "}
            </tr>{" "}
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <th scope="row">#</th>
                  <td>{item.name}</td>
                  <td>{item.model}</td>
                  <td>{item.plateNum}</td>
                  <td>{item.driver}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
