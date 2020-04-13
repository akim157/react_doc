import React, {useEffect} from 'react';
import TodoList from "./todo/TodoList";
import Context from "./todo/context";
import './index.css';
// import AddTodo from "./todo/addTodo";
import Loading from './todo/loader';
import Modal from './Modal/Modal';

// const AddTodo = React.lazy(() => import('./todo/addTodo'));
const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('./todo/addTodo'));
    }, 3000);
}));

function App() {
    // const [todos, setTodos] = React.useState([
    //     {id: 1, completed: false, title: 'Купить хлеб'},
    //     {id: 2, completed: false, title: 'Купить масло'},
    //     {id: 3, completed: false, title: 'Купить молоко'},
    // ]);
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000)
            });
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.compelted = !todo.compelted;
            }
            return todo;
        }));
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false,
        }]));
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>React</h1>
                <Modal />
                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>
                {loading && <Loading/>}
                {todos.length ?
                    <TodoList todos={todos} onToggle={toggleTodo}/> :
                    loading ?
                        null :
                        (<p>No todos</p>)
                }
            </div>
        </Context.Provider>
    );
}

export default App;