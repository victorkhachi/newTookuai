import React from 'react'

const carModel = () => {
  return (
    <div className="sectD admin">
      <div className="title">
        <div className="t-txt">
          <p>Driver Cars List</p>
        </div>
        <div className="tIcon">
          <input type="text" placeholder="Search" />
          <label className="addi">Add New Driver</label>
          <label className="addi">Search</label>
        </div>
      </div>
      <table className="table table-striped table-hover tb shadow-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Driver</th>
            <th scope="col">Car Model</th>
            <th scope="col">Condition</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>G-wagon</td>
            <td>On G</td>
            <td>
              <p className="del" >X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Buggati</td>
            <td>Good</td>
             <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Maybach</td>
            <td>Good</td>
             <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
             <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
             <td>
              <p className="del">X</p>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>mclAREN</td>
            <td>@twitter</td>
             <td>
              <p className="del">X</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default carModel
