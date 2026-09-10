
import { useState } from "react";



function Todo() {

  let [text, setText] = useState("");

  let [tasks, setTasks] = useState(["Learn React Hooks", "Build a Todo App", "Practice CSS"]);


  return (
 <>
 
      <div class="app">

        <div class="header">
          <div>
            <h1>My Tasks</h1>
            <p>Stay focused. Get things done.</p>
          </div>

          <div class="date">
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
            <div class="task">
              <div class="check"></div>

              <div class="task-content">
                <h3>{task}</h3>
              </div>
            </div>
          ))}



          {/* <div class="task">
            <div class="check"></div>

            <div class="task-content">
              <h3></h3>
             
            </div>

            
            <button class="delete">×</button>
          </div> */}

          {/* <div class="task completed">
            <div class="check">✓</div>

            <div class="task-content">
              <h3>Practice CSS</h3>
              <p>Build a modern card design</p>
            </div>

           
            <button class="delete">×</button>
          </div> */}

          {/* <div class="task">
            <div class="check"></div>

            <div class="task-content">
              <h3>Build Todo App</h3>
      
            </div>

            <button class="delete">×</button>
          </div> */}

        </div>

      </div>
 
 
 </>
  );
}

export default Todo;
