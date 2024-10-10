import React, {useContext} from "react";
import { AppContext } from "../App";

function TaskItem({ taskName, taskId, taskCategory, completed }) {
  const { setTaskAsComplete } = useContext(AppContext);

  return (
    <li className="taskItem">
      <label
        htmlFor={taskId}
        className="taskName"
        style={{ textDecoration: completed ? "line-through" : "none" }} 
      >
        {taskName}
      </label>
      <input
        type="checkbox"
        name={taskId}
        id={taskId}
        checked={completed} 
        onChange={() => setTaskAsComplete(taskId, taskCategory)} 
      />
    </li>
  );
}

export default TaskItem;
