import React, {useState} from 'react'
import styles from '../App.module.css'

const AddTodoForm = ({onAddNewTask}) => {

const [inputValue, setInputValue] = useState('');


const handleSubmit = (e) => {
    e.preventDefault(); // evita que la pagina se recargue al enviar el formulario
    onAddNewTask(inputValue)
    setInputValue(''); // limpia el campo de texto después de enviar
}

  return (
    <div>
<form onSubmit={handleSubmit} className={styles.inputContainer}>


<input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}
/>
<button type='submit' className={styles.addButton}>➕</button>
   </form>
    </div>
  )
}

export default AddTodoForm
