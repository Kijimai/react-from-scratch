import React, { useState } from "react"
import "./NewTodoForm.css"

const NewTodoForm = () => {
  const [input, setInput] = useState("")
  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type in your new task"
      />
      <button className="new-todo-btn">Create Todo</button>
    </div>
  )
}

export default NewTodoForm
