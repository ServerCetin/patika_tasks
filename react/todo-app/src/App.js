import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Credentials from './components/Credentials'
import {useState} from "react";


function App() {

    // 'displayStatus:' deleted/active/disabled
    const todos = [
        {'text': "Learn react", 'done': false, 'isActive': true, 'isDelete': false},
        {'text': "Have a life!", 'done': true, 'isActive': true, 'isDelete': false},
        {'text': 'Learn Programming for 40 hours everyday', 'done': false, 'isActive': true, 'isDelete': false},
        {'text': 'Swim', 'done': false, 'isActive': true, 'isDelete': false}
    ]
    const [todo, setTodo] = useState(todos)

    return (
    <div className="App">
      <section className="todoapp">

        <Header todo={todo} setTodo={setTodo}/>
        <Main todo={todo} setTodo={setTodo}/>
        <Footer todo={todo} setTodo={setTodo}/>

      </section>

      <Credentials />
    </div>
  );
}

export default App;
