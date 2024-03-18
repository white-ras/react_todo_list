import { Button, Form, InputGroup } from "react-bootstrap"

export const TodoItem = (props) => {
  const { id, text, completed = false } = props;

  const hadleCheckboxChange = (event) => {
    // alert(event.target);
    // todos[id].completed = !completed;
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
      <Button variant="outline-secondary">削除</Button>
    </InputGroup>
  )

}