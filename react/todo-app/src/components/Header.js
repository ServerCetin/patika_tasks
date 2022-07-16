import {useState} from "react";



function Header({todo, setTodo}){
    const [newTodo, setNewTodo] = useState('')

    const addNewTodo = (e) => {
        e.preventDefault(); // for not refreshing the page after submitting

        if (newTodo === "") {
            return;
        } //if newTodo is empty do not add

        setTodo([
            ...todo,
            {
                'text': newTodo,
                'done': false,
                'isActive': true,
                'isDelete': false
            },
        ]);
    };

    return(
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={addNewTodo}>

                <input name="newTodo" className="new-todo" placeholder="What needs to be done?"
                       onChange={(e) => {
                           setNewTodo(e.target.value)
                       }} autoFocus/>
            </form>
        </header>
    )
}

export default Header