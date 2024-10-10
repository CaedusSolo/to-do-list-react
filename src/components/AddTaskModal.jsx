import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { nanoid } from "nanoid";

function AddTaskModal() {
  const { handleClose, listItems, addTask } = useContext(AppContext);

  const [categorySelected, setCategorySelected] = useState(listItems[0].category);
  const [newTask, setNewTask] = useState('');  // Initialize as an empty string

  function mapOptionValues() {
    return listItems.map((item) => {
      return <option key={item.category} value={item.category}>{item.category}</option>;
    });
  }

  function updateCategorySelected(categorySelected) {
    setCategorySelected(categorySelected);
  }

  function updateNewTask(taskName) {
    setNewTask(taskName);  
  }

  function handleSaveTask() {
    const taskObject = {
      id: nanoid(),
      task: newTask,
      completed: false,
    };
    addTask(categorySelected, taskObject);  
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
              <select
                name="category"
                id="category"
                value={categorySelected}
                onChange={(e) => updateCategorySelected(e.target.value)}
              >
                {mapOptionValues()}
              </select>
            </div>
            <div className="taskCreation">
              <label htmlFor="newTask">Enter Task Name</label>
              <input
                type="text"
                name="newTask"
                id="newTask"
                value={newTask}
                onChange={(e) => updateNewTask(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={newTask.length < 4}  
              onClick={handleSaveTask}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
