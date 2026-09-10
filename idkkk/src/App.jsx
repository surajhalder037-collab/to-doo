
import { useState } from "react";

function Todo() {

  let [text, setText] = useState("");
  let [tasks, setTasks] = useState([]);
  let [completed, setCompleted] = useState(false);

 
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
   
  let deelete = () => {
     setTasks(tasks.slice(1));
  }

  return (
 <>
 
      <div className="app">

        <div className="header">
          <div>
            <h1>My Tasks</h1>
            <p>Stay focused. Get things done.</p>
          </div>

          <div className="date">
            <span>Today</span>
            <strong>10 Sep</strong>
          </div>
        </div>

        

        <div class="input-box">
          <input onChange={(e) => {setText(e.target.value); }} value={text}  type="text" placeholder="What needs to be done?"/>
            <button onClick={() => {setTasks([...tasks, text]); setText(""); }}>+ Add Task</button>
        </div> 

        <div class="tasks">


          {tasks.map((task) => (
            <div className="task">
              <div class="check"></div>

              <div className="task-content">
                <h3>{task}</h3>
              </div>
              <button onClick={ deelete } className="delete">×</button>
            </div>
          ))}
        </div>

      </div>
 
 
 </>
  );
}

export default Todo;
