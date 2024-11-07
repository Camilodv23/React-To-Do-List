import { useState } from "react"
import styles from '../App.module.css';

const TodoItem = ({item, onToggleTask, onRemoveTask, onEditTask}) => {

 const [editing , setEditing] = useState(false)
 const [newText, setNewText] = useState(item.text)

 const handleEdit = () =>{
   setEditing(true)
 }

 const handleSave = () => {
  onEditTask(item.id, newText)
  setEditing(false)
 }



  return (
    <div className={styles.todoItem}>

      <input type='checkbox' checked={item.completed}
      onChange={() => onToggleTask(item.id)} /> {/* funcion para marcar tareas como completadas por el id*/}
      
      {editing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
    
        <span className={styles.todoText} style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
        {item.text}
        </span>
    
    )}
      <button className={styles.deleteButton} onClick={() => onRemoveTask(item.id)}>🗑️</button>

     {editing ? (
      <button  onClick={handleSave}>✔️</button>
     ):(
      <button className={styles.editButton}  onClick={handleEdit}>📝</button>
     )}
     


    </div>
  )
}

export default TodoItem
