import { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";


const Header = ({addList, setAddList}) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleAddList = () => {
    console.log(todo);
    const newTodo = {
      text: todo,
      id:uuidv4(),
      completed: false
    }
    console.log(newTodo)
    setAddList([...addList, newTodo])
    setTodo("");
  };

  return (
    <div className="mt-5 mb-2">
      <h1 className="text-center mb-4">Todo App</h1>
      <InputGroup className="mb-3 w-75 m-auto">
        <Form.Control
          placeholder="Enter new todo"
          value={todo}
          onChange={(e) => handleChange(e)}
          className="w-75"
        />
        <Button
          id="basic-addon2"
          className="bg-success w-25"
          onClick={handleAddList}
          disabled= {!todo.trim()}

        >
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
