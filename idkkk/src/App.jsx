
import { useState } from "react";

function Todo() {

  let [text, setText] = useState("");
  let [tasks, setTasks] = useState([]);
 
  let date = new Date();

  let day = date.getDate();
  let months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
  ];

  let month = months[date.getMonth()];

  
   
  let deelete = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
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
            <strong>{day} {month}</strong>
          </div>
        </div>

        

        <div className="input-box">
          <input onChange={(e) => {setText(e.target.value); }} value={text}  type="text" placeholder="What needs to be done?"/>
          <button onClick={() => { if (text === "") {
           console.log("Please enter a task");
          } else {
            setTasks([...tasks, text]);
            setText("");
          }
        }}>+ Add Task</button>
        </div> 

        <div className="tasks">


          {tasks.map((task,index) => (
            <div key={index} className="task">
              {/* <button className="check"></button> */}

              <div className="task-content">
                <h3>{task}</h3>
              </div>
              <button onClick={() => deelete(index)} className="delete">×</button>
            </div>
          ))}
        </div>

      </div>
 
 
 </>
  );
}

export default Todo;
