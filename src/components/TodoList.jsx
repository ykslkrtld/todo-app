import { useState } from "react"

const TodoList = ({addList, setAddList}) => {

  const [completed, setCompleted] = useState(false)

  const handleCompleted = (id) => {
    const newAddList = addList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setAddList(newAddList);
  }
  
  const handleDelete = (id) => {
      const newAddList = addList.filter((todo) => todo.id !== id)
      setAddList(newAddList)
  }

  return (
    <div>
      <h2 className="text-center my-4">Todos</h2>
      <ul>
        {
          addList.map((item) => (
            <li key={item.id} className="d-flex justify-content-between align-items-center bg-warning m-auto mt-3 w-50 p-2 rounded-5">
              <span className={`mx-3 ${item.completed ? "completed" : ""}`}>{item.text}</span>
              <div>
              <div className="d-flex">
              <i onClick={() => handleCompleted(item.id)} className= {`fa-regular fa-thumbs-up mx-2 ${item.completed ? "completed-icon" : ""}`} ></i>
              <i onClick={() => handleDelete(item.id)} className= "fa-solid fa-trash mx-2"></i>
            </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList