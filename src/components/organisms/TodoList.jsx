import { TodoItem } from "../molecules/TodoItem"

export const TodoList = ({ todos, setTodos}) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          id={index}
          text={todo.text}
          completed={todo.completed}
          todos={todos}
          setTodos={setTodos}
        />

      ))}
    </div>
  );
};
