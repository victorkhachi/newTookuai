import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';
 class DriverTable extends Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <table className="table table-striped table-hover tb shadow-sm">
          <thead>
            {" "}
            <tr>
              <th scope="col">#</th>
              <th scope="col">{this.props.t("Dn")}</th>
              <th scope="col">{this.props.t("Da")}</th>
              <th scope="col">{this.props.t("Dp")}</th>{" "}
              <th scope="col">{this.props.t("car")}</th>{" "}
            </tr>{" "}
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr>
                  <th scope="row">#</th>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.aDriver}</td>
                  <td>{item.car}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default withTranslation()(DriverTable)


// import React from 'react'

// const DriverTable = () => {
//   return (
//     <div>
//       <table className="table table-striped table-hover tb shadow-sm">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">First</th>
//             <th scope="col">Last</th>
//             <th scope="col">Handle</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             {/* {list.map(item => <td key={item.item}>{item.item}</td>)} */}
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td colspan="2">Larry the Bird</td>
//             <td>@twitter</td>
//           </tr>
//           <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//           </tr>
//           <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//           </tr>
//           <tr>
//             <th scope="row">3</th>
//             <td colspan="2">Larry the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DriverTable
