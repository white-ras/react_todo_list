import { Container } from "react-bootstrap";
import { Header } from "./components/templates/Header";
import { ListFooter } from "./components/organisms/ListFooter";
import { TodoList } from "./components/organisms/TodoList";
import { InputAndAddButton } from "./components/molecules/InputAndAddButton";

function App() {
  return (
    <>
      <Container className="mt-5">
        <Header />

        <InputAndAddButton />

        <TodoList />


      <ListFooter />

      </Container>
    </>
  );
}

export default App;
