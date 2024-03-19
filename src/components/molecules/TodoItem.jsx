import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap"
import { TodoItemShow } from "./TodoItemShow";
import { TodoItemEdit } from "./TodoItemEdit";

export const TodoItem = (props) => {
  const [ edited, setEdited ] = useState(false);

  const { todos, setTodos, id, text, completed = false } = props;

  const hadleCheckboxChange = (event) => {
    const newTodos = [...todos];
    newTodos[id].completed = !completed;
    setTodos(newTodos);
  }

  const onClickDelete = () => {
    const confirmDelete = window.confirm("本当に削除しますか？");
    if(confirmDelete){
      const newTodos = [...todos];
      newTodos.splice(id, 1);// 何番目から何個削除するか
      setTodos(newTodos);
    }
  }

  const onClickEdit = (event) => {
    setEdited(true);
  }

  return (
    edited ? <TodoItemEdit
                id={id}
                text={text}
                setEdited={setEdited}
                todos={todos}
                setTodos={setTodos}
              />
    :
    <TodoItemShow
      text={text}
      completed={completed}
      hadleCheckboxChange={hadleCheckboxChange}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  )

}