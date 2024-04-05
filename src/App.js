import { useState } from "react"
import Header from "./components/Header"
import TodoList from "./components/TodoList"

const App = () => {
  const [addList, setAddList] = useState([])

  return (
    <div>
      <Header addList={addList} setAddList={setAddList}/>
      <TodoList addList={addList} setAddList={setAddList}/>
    </div>
  )
}

export default App