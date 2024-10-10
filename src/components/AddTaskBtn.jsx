import React, { useContext } from "react";
import { AppContext } from "../App";
import AddTaskModal from "./AddTaskModal";

function AddTaskBtn() {
  const {showAddTaskModal, handleShowAddTaskModal} = useContext(AppContext)
  
  return (
    <div>
      <button type="button" className="btn addTaskBtn" onClick={handleShowAddTaskModal}>
        Add New Task
      </button>
      {showAddTaskModal && <AddTaskModal />}
    </div>
  );
};


export default AddTaskBtn;