import React, { useContext } from "react";
import { AppContext } from "../App";
import AddTaskModal from "./AddTaskModal";

function AddTaskBtn() {
  const {showModal, handleShow} = useContext(AppContext)
  
  return (
    <div>
      <button type="button" className="btn btn-primary addRemoveBtn" onClick={handleShow}>
        Add Task
      </button>
      {showModal && <AddTaskModal />}
    </div>
  );
};


export default AddTaskBtn;