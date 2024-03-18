import { Button, Form, InputGroup } from "react-bootstrap"

export const InputAndAddButton = ({todos, setTodos}) => {
  // const todoList = document.getElementById("js-todo-list");

  const onClickAdd = (event) => {
    const inputElement = event.target.previousElementSibling;
    const todoText = inputElement.value;
    if(todoText === "") return;
    const newTodo = {
        text: todoText,
        completed: false
      };
    const newTodos = [...todos, newTodo]
    setTodos(newTodos);

    inputElement.value = "";
  }

  return (
    <>
      <InputGroup className="mb-5">
      <Form.Control
        placeholder="Todoを入力してください"
        aria-label="Todoを入力してください"
        aria-describedby="basic-addon2"
      />
      <Button
        variant="outline-secondary"
        id="add-button"
        onClick={onClickAdd}
      >
        追加
      </Button>

    </InputGroup>
    <hr />
    </>
  )
}