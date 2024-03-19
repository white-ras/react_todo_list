import { Button, Form, InputGroup } from "react-bootstrap"

export const TodoItemShow = (props) => {
  const { text, completed = false, hadleCheckboxChange, onClickEdit, onClickDelete } = props;

  const textDecoration = completed === true ? "line-through" : "none";

  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox
        aria-label="Checkbox for following text input"
        checked={completed}
        onChange={hadleCheckboxChange}
      />

      <Form.Control
        aria-label="Text input with checkbox"
        value={text}
        disabled="true"
        style={{ textDecoration: textDecoration }}
      />
      <Button variant="outline-secondary" onClick={onClickEdit}>編集</Button>
      <Button variant="outline-secondary" onClick={onClickDelete}>削除</Button>
    </InputGroup>
  )

}