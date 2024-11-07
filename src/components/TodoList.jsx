import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks, onToggleTask, onRemoveTask, onEditTask}) => {
  return (
    <div>
    {tasks.map((item) => (

<TodoItem key={item.id} item={item} onToggleTask={onToggleTask} onRemoveTask={onRemoveTask} onEditTask={onEditTask} />

    ))}
</div> 
  )
}

export default TodoList
