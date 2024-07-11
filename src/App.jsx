import styles from "./App.module.css"

import { Header } from "./components/Header.jsx"
import { useState } from 'react'
import { NewTask } from "./components/NewTask.jsx"

function App() {

   const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

   const addTask = () => {
    if (newTask.trim() !== '') {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }

  return (
    <>
      <div>
        <div className={styles.Header}>
            <Header/>
        </div>

         <div className={styles.NewTask}>

         <input 
         className={styles.inputTask} 
         type="text"  
         id="new-task" 
         onChange={(e) => setNewTask(e.target.value)} 
         placeholder="Adicionar uma nova tarefa"/>

          <button className={styles.button} onClick={addTask}>Criar</button>
         </div>

        <div className={styles.info}>
          <h2 className={styles.TaskedInfoCreate}>Tarefas criadas <p className={styles.contador}>1</p> </h2>
          <h2 className={styles.TaskedInfoCompleted}>Tarefas Concluídas <p className={styles.contador}>1</p> </h2>
        </div>
          <hr />
          <div>
          {tasks.map((task, index) => (
          <NewTask 
          key={index}
          content={task}
          />
        ))}
          </div>
      </div>
    </>
  )
  }
 }
}

export default App

