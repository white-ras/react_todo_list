import { Button, Form, InputGroup } from "react-bootstrap"

export const InputAndAddButton = () => {
  return (
    <>
      <InputGroup className="mb-5">
      <Form.Control
        placeholder="Todoを入力してください"
        aria-label="Todoを入力してください"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="add-button">
        追加
      </Button>

    </InputGroup>
    <hr />
    </>
  )
}