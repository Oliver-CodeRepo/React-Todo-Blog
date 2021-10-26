import React from 'react'
import './TodoStyle.css'
import AddTask from './AddTask'
import TaskList from './TaskList'

function Todo() {
    return (
        <div className='container'>
            <div className='row'>
                <AddTask />
                <TaskList />
            </div>
        </div>
    )
}

export default Todo
