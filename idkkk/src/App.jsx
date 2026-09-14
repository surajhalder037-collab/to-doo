
import { useState } from "react";
import Task from "./task";
import Input from "./input";
import Head from "./header";


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
 
      <div className="app"></div>
      <Head day={day} month={month} />
      <Input tasks={tasks} text={text} setTasks={setTasks} setText={setText} />
      <Task deelete={deelete} tasks={tasks} setTasks={setTasks} /> 
 </>
  );
}

export default Todo;
