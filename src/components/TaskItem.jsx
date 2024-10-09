import React from "react";

function TaskItem({ taskName, taskId }) {
  return (
    <li className="taskItem">
      <label htmlFor={taskId} className="taskName">
        {taskName}
      </label>
      <input type="checkbox" name={taskId} id={taskId} />
    </li>
  );
}

export default TaskItem;
