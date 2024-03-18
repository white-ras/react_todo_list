import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="mt-5">
        <Navbar className="mb-5"bg="secondary" variant="light" expand="lg" fontSize="lg">
          <h1>To Do List</h1>
        </Navbar>


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

        <div class="mt-5" id="js-todo-list">

          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
            <Button variant="outline-secondary">編集</Button>
            <Button variant="outline-secondary">削除</Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
            <Button variant="outline-secondary">編集</Button>
            <Button variant="outline-secondary">削除</Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Todoを入力してください"
              aria-label="Todoを入力してください"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="add-button">
              編集
            </Button>
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
            <Button variant="outline-secondary">編集</Button>
            <Button variant="outline-secondary">削除</Button>
          </InputGroup>

        </div>


        <Navbar className="mb-5"bg="secondary" variant="light" expand="lg" >
          <p>全てのタスク：３ 完了済み：１ 未完了：２</p>
        </Navbar>

      </Container>
  </>
  );
}

export default App;
