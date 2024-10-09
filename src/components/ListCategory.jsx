import React from "react";
import TaskItem from "./TaskItem";

function ListCategory({category, tasks, categoryNum}) {

  function mapTasks() {
    return tasks.map((task) => {
      return (
        <TaskItem 
          taskName={task.task}
          taskId={task.id}
        />
      );
    });
  }

  return (
    <div className="listCategory accordion-item">
      <h3 className="accordion-header" id={`heading${categoryNum}`}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${categoryNum}`}
          aria-expanded={false}
          aria-controls={`collapse${categoryNum}`}
        >
          {category}
        </button>
      </h3>
      <div
        id={`collapse${categoryNum}`}
        className={`accordion-collapse collapse`}
        aria-labelledby={`heading${categoryNum}`}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <ul className="tasksList">
            {mapTasks()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListCategory;