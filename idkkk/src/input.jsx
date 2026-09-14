
function Input({ tasks, text, setText, setTasks }) {
  return(

    <div className="input-box">
          <input onChange={(e) => {setText(e.target.value); }} value={text}  type="text" placeholder="What needs to be done?"/>
          
          <button onClick={() => { if (text === "") {
           console.log("Please enter a task");
      } else {
        setTasks([
          ...tasks,
          {
            name: text,
            completed: false
          }
        ]);

        setText("");
      }
        }}>+ Add Task</button>
        </div>  
  )
}

export default Input;