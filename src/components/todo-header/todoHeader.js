import React from 'react';
import TodoSearch from "../todo-search";
import TodoStatusFilter from "../todo-status-filter/todoStatusFilter";

const TodoHeader = () => {
    return (
        <div>
            <TodoSearch />
            <TodoStatusFilter />
        </div>
    )
}

export default TodoHeader;