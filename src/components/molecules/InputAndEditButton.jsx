import { Button, Form, InputGroup } from "react-bootstrap"

export const InputAndEditButton = () => {
  return (
    <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    <Form.Control aria-label="Text input with checkbox" />
    <Button variant="outline-secondary">保存</Button>
  </InputGroup>

  )
}
