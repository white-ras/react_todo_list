import { Navbar } from "react-bootstrap"

export const ListFooter = ({ todos }) => {
  const all = todos.length;
  const completed = todos.filter(todo => todo.completed === true).length;
  const incomplete = all - completed;

  return (
    <Navbar className="mb-5 pt-4 justify-content-center text-white" bg="secondary" variant="light" expand="lg">
      <p>全てのタスク：{all} 完了済み：{completed} 未完了：{incomplete}</p>
    </Navbar>

  )
}