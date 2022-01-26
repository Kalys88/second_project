import React from 'react';

const App = () => {
    const todos = [
        {id: 1, label: 'Drink tea', done: false, important: false},
        {id: 2, label: 'Drink coffee', done: false, important: false},
        {id: 3, label: 'Drink juice', done: false, important: false},
        {id: 4, label: 'Learn React', done: false, important: false},
    ]

    return (
        <div>
            <TodoHeader />
            <TodoList todos = {todos} />
        </div>
    )
}

export default App;