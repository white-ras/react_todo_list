import { Navbar } from "react-bootstrap"

export const Header = () => {
  return (
    <>
      <Navbar className="mb-5"bg="secondary" variant="light" expand="lg" fontSize="lg">
        <h1>React To Do List</h1>
      </Navbar>
    </>
  )
}