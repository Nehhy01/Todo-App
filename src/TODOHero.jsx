export default function TODOHero({todos_completed, total_todos}) {
    return (

        < section className="todohero_section">
            <div>
                <h2>Task Done</h2>
                <p>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    );
}