import { Container } from "react-bootstrap";
import { Header } from "./components/templates/Header";
import { ListFooter } from "./components/organisms/ListFooter";
import { TodoList } from "./components/organisms/TodoList";
import { InputAndAddButton } from "./components/molecules/InputAndAddButton";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Container className="mt-5">
        <Header />

        <InputAndAddButton todos={todos} setTodos={setTodos}/>
        <div class="mt-5" id="js-todo-list">

          <TodoList todos={todos} setTodos={setTodos}/>
        </div>

      <ListFooter todos={todos} />
      </Container>
    </>
  );
}

export default App;
