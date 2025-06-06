import Item from './Item'

function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos.map((item, index) => <Item key={index} item={item} setTodos={setTodos}/>)
      ) : 
        <p>Seems lonely in here, what are you up to?</p>}
    </ol>
  );

          const updatedTodos = JSON.stringify(todos)
        localStorage.setItem("todos", updatedTodos);
}
export default TODOList;