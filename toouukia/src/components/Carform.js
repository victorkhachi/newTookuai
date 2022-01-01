import React, { Component } from 'react'

export default class Carform extends Component {
  render() {
    return (
      <div className="formm shadow-lg">
        <form onSubmit={this.props.handleFormSubmit} className="Formm">
          <label className="labell">Enter Car Name</label>
          <input
            className="inputt"
            placeholder="Car's Name"
            value={this.props.newName}
            type="text"
            name="name"
            onChange={this.props.handleInputChange}
          />
          <label className="labell">Enter Car's Model</label>
          <input
            className="inputt"
            placeholder="Car Model"
            value={this.props.newModel}
            type="text"
            name="model"
            onChange={this.props.handleInputChange}
          >
          </input>
          <label className="labell">Enter Car's Platenum</label>
          <input
            className="inputt"
            value={this.props.newPlateNum}
            type="text"
            name="plateNum"
            onChange={this.props.handleInputChange}
            placeholder="Plate Number"
          />
          <label className="labell">Enter Driver's Name</label>
          <input
            className="inputt"
            value={this.props.newDriver}
            type="text"
            name="driver"
            onChange={this.props.handleInputChange}
            placeholder="Driver"
          />
          <button className="btnnn" type="submit" value="Submit">
            Add Car
          </button>
        </form>
      </div>
    );
  }
}


// import React, { useState, useEffect } from "react";

// const Carform = () => {
//   const [view, setview] = useState(false);
//   return (
//     <div className="formm shadow-lg">
//       <div className="Formm">
//         <label>Enter Car's Name</label>
//         <input placeholder="Driver's Name" />
//         <label>Enter Car's Model</label>
//         <input placeholder="Driver's Car" />
//         <label>Enter Car's ID</label>
//         <input placeholder="Driver's ID" />
//         <button
//           onClick={() => setview(!view)}
//           data-bs-toggle="modal"
//           data-bs-target="#exampleModal"
//         >
//           Add Car
//         </button>
//       </div>

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
//               Car added (this would be effective once backend is available)
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

// export default Carform;
