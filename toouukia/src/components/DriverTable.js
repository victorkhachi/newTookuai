import React, { Component } from 'react'

export default class DriverTable extends Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <table className="table table-striped table-hover tb shadow-sm">
          <thead>
            {" "}
            <tr>
              <th scope="col">#</th>
              <th scope="col">Driver's Name</th>
              <th scope="col">Age</th>
              <th scope="col">Phone Number</th>{" "}
              <th scope="col"> Car</th>{" "}
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
