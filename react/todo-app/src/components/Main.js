import {useState} from "react";

function Main({todo, setTodo}) {
    const [isAllTodosTickedFalse, setIsAllTodosTickedFalse] = useState(false)

    const tickAllTodos = () => {
        let newTodo = []

        todo.map(t => {
            let nt = {}
            nt['text'] = t.text
            nt['done'] = !isAllTodosTickedFalse
            setIsAllTodosTickedFalse(!isAllTodosTickedFalse)
            newTodo.push(nt)
        })
        setTodo(newTodo)
    }

    const getActiveTodos = todo.filter(t => t.isActive === true).filter(t => t.isDelete === false)

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all" onClick={tickAllTodos}>
                Mark all as complete
            </label>

            <ul className="todo-list">

                {getActiveTodos.map((td, index) =>
                    td.done ?
                        <li key={index} className="completed">
                            <div className="view">
                                <input className="toggle" type="checkbox" onClick={() => {
                                    todo[index].done = !todo[index].done;
                                    setTodo([...todo])
                                }}/>
                                <label>{td.text}</label>
                                <button className="destroy" onClick={() => {
                                    //we should not delete tdo[index] directly because React does not allow us to
                                    //modify states directly
                                    setTodo(todo.filter((td,i) => i !== index))
                                }}></button>
                            </div>
                        </li>
                        :
                        <li key={index}>
                            <div className="view">
                                <input className="toggle" type="checkbox" onClick={() => {
                                    todo[index].done = !todo[index].done;
                                    setTodo([...todo])
                                }}/>
                                <label>{td.text}</label>
                                <button className="destroy" onClick={() => {
                                    //we should not delete tdo[index] directly because React does not allow us to
                                    //modify states directly
                                    setTodo(todo.filter((td,i) => i !== index))
                                }}></button>
                            </div>
                        </li>
                )}
            </ul>
        </section>
    )
}

export default Main