import { Navbar } from "react-bootstrap"

export const ListFooter = () => {
  return (
    <Navbar className="mb-5"bg="secondary" variant="light" expand="lg" >
      <p>全てのタスク：３ 完了済み：１ 未完了：２</p>
    </Navbar>

  )
}