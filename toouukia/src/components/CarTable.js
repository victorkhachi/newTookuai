import React, { Component } from 'react'
import { withTranslation } from "react-i18next";
 class CarTable extends Component {
  render() {
      const items = this.props.items;
    return (
      <div>
        <table className="table table-striped table-hover tb shadow-sm">
          <thead>
            {" "}
            <tr>
              <th scope="col">#</th>
              <th scope="col">{this.props.t("Cn")}</th>
              <th scope="col">{this.props.t("CModel")}</th>
              <th scope="col"> {this.props.t("Cpn")}</th>{" "}
              <th scope="col">{this.props.t("")}</th>{" "}
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
    );
  }
}
export default withTranslation()(CarTable)