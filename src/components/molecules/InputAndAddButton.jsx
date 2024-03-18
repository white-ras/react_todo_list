import { Button, Form, InputGroup } from "react-bootstrap"
import { AddTodo } from "../../hooks/useAddTodo";

export const InputAndAddButton = () => {
  // const todoList = document.getElementById("js-todo-list");

  const onClickAdd = (event) => {
    const inputElement = event.target.previousElementSibling;
    const todoText = inputElement.value;
    AddTodo(todoText);
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