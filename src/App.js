import React from "react"
import "./App.css"
import { hot } from "react-hot-loader"
import ToDoList from "./components/ToDoList"

const App = () => {
  return (
    <div className="App">
      <ToDoList />
    </div>
  )
}

export default App
// export default hot(module)(App)
