
function Head({day,month}) {
  return(
    <div className="header"><div>
      <h1>My Tasks</h1>
      <p>Stay focused. Get things done.</p>
    </div>

       <div className="date">
            <span>Today</span>
            <strong>{day} {month}</strong>
          </div> 
    </div>
  )
}
export default Head;