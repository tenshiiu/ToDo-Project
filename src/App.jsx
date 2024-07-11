import styles from "./App.module.css"

import { Header } from "./components/Header.jsx"
import { useState } from 'react'
import { NewTask } from "./components/NewTask.jsx"

function App() { 

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
         placeholder="Adicionar uma nova tarefa"/>

          <button className={styles.button}>Criar</button>
         </div>

        <div className={styles.info}>
          <h2 className={styles.TaskedInfoCreate}>Tarefas criadas <p className={styles.contador}>1</p> </h2>
          <h2 className={styles.TaskedInfoCompleted}>Tarefas Concluídas <p className={styles.contador}>1</p> </h2>
        </div>
          <hr />
          <div>
          <NewTask
          content="Passear com os cachorros"
          />
          </div>
      </div>
    </>
  )
  }

export default App

