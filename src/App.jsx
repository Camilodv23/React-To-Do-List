import React, {useState} from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import styles from './App.module.css';


function App() {
  
  const [tasks, setTasks] = useState([]);

 const addTask = (text) => {

 const newTask = {
  id: Date.now() ,
 text: text ,
 completed: false
 }
 
 setTasks([...tasks,newTask]) 
}

 const toggleTaskDone = (id) => {
  setTasks(tasks.map((task ) =>
  task.id === id ? {...task , completed: !task.completed} : task
  ))
 }

 const editTask = (id, newText) => {
  setTasks(tasks.map((task)=>
  task.id === id ? {...task, text: newText } : task 
))
 }

 const removeTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

  return (
    
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>
      
<AddTodoForm onAddNewTask={addTask} />
<TodoList tasks={tasks} onToggleTask={toggleTaskDone} onRemoveTask={removeTask} onEditTask={editTask}/>

    </div>
  )
  
}

export default App
