function Footer({todo, setTodo}) {

    const getAllTodos = () => {
        todo.map(t =>  {
            if(!t.isDelete){ t.isActive = true;}
        })
        setTodo([...todo])
    }

    const getActiveTodos = () => {
        todo.map(t =>  {
            if(!t.isDelete){ t.isActive = t.done !== true;}
        })
        setTodo([...todo])
    }

    const getCompletedTodos = () => {
        todo.map(t =>  {
            if(!t.isDelete){ t.isActive = t.done === true;}
        })
        setTodo([...todo])
    }

    const cleanCompletedTodos = () => { setTodo([...todo.filter(t=> t.done!==true).filter(t=> t.isDelete===false)])}

    return (
        <footer className="footer">
		<span className="todo-count">
			<strong>{todo.filter(t => t.done === false).length} </strong>
			items left
		</span>

            <ul className="filters">
                <li onClick={getAllTodos}>
                    <a href="#/" className="selected">All</a>
                </li>
                <li onClick={getActiveTodos}>
                    <a href="#/">Active</a>
                </li>
                <li onClick={getCompletedTodos}>
                    <a href="#/">Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={cleanCompletedTodos}>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer