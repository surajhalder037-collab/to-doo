
function Todo() {
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
          <input type="text" placeholder="What needs to be done?"/>
            <button>+ Add Task</button>
        </div>

        <div class="tasks">

          <div class="task">
            <div class="check"></div>

            <div class="task-content">
              <h3>Learn React Hooks</h3>
              <p>Practice useState and useEffect</p>
            </div>

            
            <button class="delete">×</button>
          </div>

          <div class="task completed">
            <div class="check">✓</div>

            <div class="task-content">
              <h3>Practice CSS</h3>
              <p>Build a modern card design</p>
            </div>

           
            <button class="delete">×</button>
          </div>

          <div class="task">
            <div class="check"></div>

            <div class="task-content">
              <h3>Build Todo App</h3>
              <p>Complete the React project</p>
            </div>

            <button class="delete">×</button>
          </div>

        </div>

      </div>
 
 
 </>
  );
}

export default Todo;
