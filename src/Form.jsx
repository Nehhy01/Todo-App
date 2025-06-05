const Form = ({ todos, setTodos }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.todo.value;
        const newTodo = {
            title: value,
            id: self.crypto.randomUUID(),
            is_completed: false,
        }
        // update my todo state
        setTodos((prevTodos) => [
            ...prevTodos, newTodo])

        const updatedTodoList = JSON.stringify([...todos, newTodo])
        localStorage.setItem("todos", updatedTodoList);
        event.target.reset();
    };


    return (
        <form className="form" action="" onSubmit={handleSubmit}>

            <label htmlFor="todo">
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your next Task"
                />
            </label>

            <button>
                <span className="visually-hidden">Submit</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </form>
    );
}

export default Form;
