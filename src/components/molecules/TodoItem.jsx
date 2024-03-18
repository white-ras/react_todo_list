import { Button, Form, InputGroup } from "react-bootstrap"

export const TodoItem = (props) => {
  const { todos, setTodos, id, text, completed = false } = props;

  const hadleCheckboxChange = (event) => {
    // alert(event.target);
    // todos[id].completed = !completed;
  }

  const onClickDelete = () => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);// 何番目から何個削除するか
    setTodos(newTodos);
  }

  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox
        aria-label="Checkbox for following text input"
        checked={completed}
        onChange={hadleCheckboxChange(id)}
      />

      <Form.Control
        aria-label="Text input with checkbox"
        value={text}
        disabled="true"
      />
      <Button variant="outline-secondary">編集</Button>
      <Button variant="outline-secondary" onClick={onClickDelete}>削除</Button>
    </InputGroup>
  )

}