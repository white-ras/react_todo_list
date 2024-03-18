export const AddTodo = (todoText) => {
  const todoList = document.getElementById("js-todo-list");
  const todoElement = 
    `
  <InputGroup className="mb-3">
  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
  <Form.Control
    aria-label="Text input with checkbox"
    value=${todoText}
  />
  <Button variant="outline-secondary">編集</Button>
  <Button variant="outline-secondary">削除</Button>
  </InputGroup>

  `;


  // return todoItemElement;
}