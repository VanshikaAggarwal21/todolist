import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, importantTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo" style={task.important ? { background: "orange" } : {}}>
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task} </p>
        <div>
        <button onClick={() =>importantTodo(task.id)} className='important-btn'>i</button>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}