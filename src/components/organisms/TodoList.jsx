import { InputAndEditButton } from "../molecules/InputAndEditButton"
import { TodoItem } from "../molecules/TodoItem"

export const TodoList = () => {
  return (
    <div class="mt-5" id="js-todo-list">
      <TodoItem />
      <TodoItem />
      <InputAndEditButton />
    </div>
  )
}