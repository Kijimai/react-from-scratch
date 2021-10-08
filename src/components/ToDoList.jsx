import React from "react"
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"
import "./ToDoList.css"
import { useGlobalContext } from "../utils/context"

const ToDoList = ({ todos = [{ text: "first item" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => {
        return <TodoListItem todo={todo} />
      })}
    </div>
  )
}

export default ToDoList
