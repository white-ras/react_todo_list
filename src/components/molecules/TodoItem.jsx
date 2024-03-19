import { Button, Form, InputGroup } from "react-bootstrap"

export const TodoItem = (props) => {
  const { todos, setTodos, id, text, completed = false } = props;

  const textDecoration = completed === true ? "line-through" : "none";

  const hadleCheckboxChange = (event) => {
    const newTodos = [...todos];
    newTodos[id].completed = !completed;
    setTodos(newTodos);
  }

  const onClickDelete = () => {
    
    const newTodos = [...todos];
    newTodos.splice(id, 1);// 何番目から何個削除するか
    setTodos(newTodos);
  }

  const onClickEdit = (event) => {
    const inputElement = event.target.previousElementSibling;
    inputElement.disabled=false;
    // 前の要素を取得、disabled=false、deleteボタン削除、編集ボタン削除、保存ボタン追加。
  }

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