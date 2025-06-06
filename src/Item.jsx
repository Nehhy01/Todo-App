import { useEffect, useRef, useState } from "react"

function Item({ item, setTodos }) {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)

  const completeTodo = () => {
    setTodos((prevTodos) => (
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    ))
  }
  const handleDelete = () => {
    setTodos((Todos) => (
      Todos.filter((todo) => todo.id !== item.id)
    ))
  }
  const handleEdit = () => {
    setEditing(true)
  }

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false)
  }
  const handleInputBlur = () => {
    setEditing(false)
  }
  const handleInputChange = (event) => {
    setTodos((prevTodos) =>
      prevTodos.map(todo => (item.id === todo.id ? {...todo, title: event.target.value} : todo)
    ))
  }

useEffect(() => {
  if (editing && inputRef.current) {
    inputRef.current.focus();

    //to postition the cursor at the end of the text
    inputRef.current.setSelectionRange(
      inputRef.current.value.length,
      inputRef.current.value.length
    );
  }
}, [editing])

return (
  <>
    <li id={item?.id} className="todo_item">
      {editing ? (<form className="edit-form" onSubmit={handleInputSubmit}>
        <label htmlFor="edit-todo">
          <input
            ref={inputRef}
            type="text"
            name="edit-todo"
            id="edit-todo"
            defaultValue={item?.title}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
          /></label>




      </form>) : (<><button className="todo_items_left" onClick={completeTodo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill={item.is_completed ? "#22C55E" : "none"} stroke={item.is_completed ? "none" : "#22C55E"} d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-q2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" /></svg>
        <p style={{ textDecoration: item.is_completed ? "line-through" : "none" }}>{item.title}</p>
      </button>

        <div className="todo_items_right">
          <button onClick={handleEdit}>
            <span className="visually-hidden">Edit</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-6v-4.25l9.175-9.175q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4t-.137.738t-.438.662L13.25 15zM21.025 4.4l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z" /></svg>
          </button>

          <button onClick={handleDelete}>
            <span className="visually-hidden">Delete</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21V6H4V4h5V3h6v1h5v2h-1v15zm2-2h10V6H7zm2-2h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
          </button>

        </div>
      </>
      )}
    </li>
  </>
);
}
export default Item;



