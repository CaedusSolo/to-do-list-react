import React, { useContext } from "react";
import { AppContext } from "../App";

function AddTaskModal() {
  const { showModal, setShowModal, handleShow, handleClose, listItems } =
    useContext(AppContext);

  function mapOptionValues() {
    return listItems.map((item) => {
      return <option value={item.category}>{item.category}</option>;
    });
  }

  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Task
            </h5>
          </div>
          <div className="modal-body">
            <div className="categorySelection">
              <label htmlFor="category">Select Category</label>
              <select name="category" id="category">
                {mapOptionValues()}
              </select>
            </div>
            <div className="taskCreation">
              <label htmlFor="newTask">Enter Task Name</label>
              <input type="text" name="newTask" id="newTask" />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
