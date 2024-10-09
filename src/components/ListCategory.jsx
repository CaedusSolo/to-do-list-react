import React, { useContext } from "react";
import { AppContext } from "../App";
import TaskItem from "./TaskItem";

function ListCategory({category, tasks}) {

  const {listItems} = useContext(AppContext)

  function mapTasks() {
    return tasks.map(task => {
      return <TaskItem 
      taskName={task.task}
      taskId={task.id}
      />
    })
  }

  return (
      <div className="listCategory accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {category}
          </button>
        </h3>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul>
              {mapTasks()}
            </ul>
          </div>
        </div>
      </div>

  );
}

export default ListCategory;