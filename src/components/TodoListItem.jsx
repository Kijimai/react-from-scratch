import React from "react"
import "./ToDoListItem.css"

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="completed-btn">Mark As Completed</button>
        <button className="remove-btn">Remove</button>
      </div>
    </div>
  )
}

export default TodoListItem
