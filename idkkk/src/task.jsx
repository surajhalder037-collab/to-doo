

import { TiDeleteOutline } from "react-icons/ti";


function Task({ deelete, tasks, setTasks }) {


  return (

    <div className="tasks">


      {tasks.map((task, index) => {
       
        let className = task.completed
          ? "task completed"
          : "task";

        return   <div key={index} className={className}>
          <button onClick={() => {
            setTasks(
              tasks.map((task, i) =>
                i === index
                  ? { ...task, completed: !task.completed }
                  : task
              )
            );
          }}
            className="check" ></button>

              <div className="task-content">
                 <h3>{task.name}</h3>
            </div>
          <button onClick={() => deelete(index)} className="delete">{<TiDeleteOutline />}</button>
           </div>
      })}

    </div>

  );
}
export default Task