import React from 'react'

const RentalPackage = () => {
  return (
    <div className="sectD admin">
      <div className="title">
        <div className="t-txt">
          <p>Driver Cars List</p>
        </div>
        <div className="tIcon">
          <input type="text" placeholder="Search" />
          <label className="addi">Add New Package</label>
          <label className="addi">Search</label>
        </div>
      </div>
      <table className="table table-striped table-hover tb shadow-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Drive Duration</th>
            <th scope="col">Car Model</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>3hours</td>
            <td>G-wagon</td>
            <td>20,000</td>
            <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>3hours</td>
            <td>G-wagon</td>
            <td>20,000</td>
            <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>3hours</td>
            <td>G-wagon</td>
            <td>20,000</td>
            <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>3hours</td>
            <td>G-wagon</td>
            <td>20,000</td>
            <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>3hours</td>
            <td>G-wagon</td>
            <td>20,000</td>
            <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>3hours</td>
            <td>G-wagon</td>
            <td>20,000</td>
            <td>
              <p className="del">X</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RentalPackage
