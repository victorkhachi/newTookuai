import React, { Component } from 'react'

export default class DriverForm extends Component {
  render() {
    return (
      <div className="formm shadow-lg">
        <form onSubmit={this.props.handleFormSubmit} className="Formm">
          <label className="labell">Enter Driver Name</label>
          <input
            className="inputt"
            placeholder="Driver Name"
            value={this.props.newUsername}
            type="text"
            name="username"
            onChange={this.props.handleInputChange}
          />
          <label className="labell">Enter Driver's Car</label>
          <input
            className="inputt"
            placeholder="Driver's Car"
            value={this.props.newCar}
            type="text"
            name="car"
            onChange={this.props.handleInputChange}
          />
          <label className="labell">Enter Driver's ID</label>
          <input
            className="inputt"
            value={this.props.newPassword}
            type="number"
            name="password"
            onChange={this.props.handleInputChange}
            placeholder="Driver's ID"
          />
          <label className="labell">Phone Number</label>
          <input
            className="inputt"
            value={this.props.newAdriver}
            type="number"
            name="aDriver"
            onChange={this.props.handleInputChange}
            placeholder="Driver's Phone No"
          />
          <button className="btnnn" type="submit" value="Submit">
            Add Driver
          </button>
        </form>
      </div>
    );
  }
}




// import { getList, setItem } from "../../Services/List";
// import React, { useState, useEffect } from "react";
// const DriverForm = () => {
//   const [view, setview] = useState(false);
//   const [itemInput, setItemInput] = useState("");
//   return (
//     <div>
//       <form onSubmit={this.props.handleFormSubmit} className="Formm">
//         <label>Enter Driver Name</label>
//         <input
//           placeholder="Driver Name"
//           value={this.props.newUsername}
//           type="text"
//           name="username"
//           onChange={this.props.handleInputChange}
//         />
//         <label>Enter Driver's Car</label>
//         <input
//           placeholder="Driver's Car"
//           value={this.props.newCar}
//           type="text"
//           name="car"
//           onChange={this.props.handleInputChange}
//         />
//         <label>Enter Driver's ID</label>
//         <input
//           value={this.props.newPassword}
//           type="password"
//           name="password"
//           onChange={this.props.handleInputChange}
//           placeholder="Driver's ID"
//         />
//         <button type="submit" value="Submit">
//           Add Driver
//         </button>
//       </form>

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               Driver added (this would be effective once backend is available)
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverForm;
