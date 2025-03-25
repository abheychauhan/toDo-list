import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, setPriority } from "../redux/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li id="list" key={task.id}>
          {task.text} <button id='delete' onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        
        </li>
      ))}
    </ul>
  );
};

export default TaskList;