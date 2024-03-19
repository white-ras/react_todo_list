import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap"

export const TodoItemEdit = (props) => {
  const { id, text, setEdited, todos, setTodos } = props;
  const [todoText, setTodoText] = useState(text);
  const onClickSave = (event) => {
    const newTodoText = event.target.previousElementSibling.value;
    const newTodos = [...todos];
    newTodos[id].text = newTodoText;
    setTodos(newTodos);
    setEdited(false);
  }

  const handleChange = (event) => {
    setTodoText(event.target.value);
  }

  return (
    <InputGroup className="mb-3">
      <Form.Control
        aria-label="Text input with checkbox"
        value={todoText}
        onChange={handleChange}
      />
      <Button variant="outline-secondary" onClick={onClickSave}>保存</Button>
    </InputGroup>
  )

}