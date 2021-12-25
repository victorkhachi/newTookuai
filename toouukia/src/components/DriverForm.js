import { getList, setItem } from "../../Services/List";
import React, { useState, useEffect } from "react";
const DriverForm = () => {
  const [view, setview] = useState(false);
  const [itemInput, setItemInput] = useState("");
  return (
    <div className="formm shadow-lg">
      <div className="Formm">
        <label>Enter Driver's Name</label>
        <input
          placeholder="Driver's Name"
          onChange={(event) => setItemInput(event.target.value)}
          value={itemInput}
        />
        <label>Enter Driver's Car</label>
        <input placeholder="Driver's Car" />
        <label>Enter Driver's ID</label>
        <input placeholder="Driver's ID" />
        <button
          onClick={() => setview(!view)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Driver
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Driver added (this would be effective once backend is available)
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverForm;
