import React from 'react'

function TaskItem({taskName}) {
  return (
    <li className='taskItem'>
        {taskName}
        <span></span>
    </li>
  )
}

export default TaskItem