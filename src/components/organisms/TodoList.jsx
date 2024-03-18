import { TodoItem } from "../molecules/TodoItem"

export const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          id={index}
          text={todo.text}
          completed={todo.completed}
        />

      ))}
    </div>
  );
};
