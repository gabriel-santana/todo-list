import { Form } from './components/Form'
import { List } from './components/List'

import Rocket from './assets/rocket.svg'

import './global.css'
import styles from './App.module.css'
import { useState } from 'react'

export function App() {
  const [newItem, setNewItem] = useState('')

  const handleAddNewItem = (description: string) => {
    setNewItem(description);
  }

  return (
    <>
        <div className={styles.header}>
          <img src={Rocket} alt="Logo" />
          <h1 className={styles.title}>to<span>do</span></h1>
        </div>
        
        <div className={styles.content}>
          <Form handleAddNewItem={handleAddNewItem}/>
          <List newItem={newItem}/>
        </div>
    </>
  )
}
