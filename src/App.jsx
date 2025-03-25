import React from "react";
import TaskInput from "./components/TaskInput.jsx";
import TaskList from "./components/TaskList";
import { Weather } from "./components/Weather.jsx";
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "./redux/authSlice";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {isAuthenticated ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <Weather />
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <>
          <h2>Please log in to access the To-Do List</h2>
          <button onClick={() => dispatch(login())}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;