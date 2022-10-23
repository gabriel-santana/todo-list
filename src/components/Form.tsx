import { FormEvent, useState } from 'react';
import Plus from '../assets/plus.svg'
import styles from './Form.module.css'

interface FormProps {
  handleAddNewItem: (description: string) => void;    
}

export function Form({ handleAddNewItem }: FormProps) {
  const [description, setDescription] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAddNewItem(description)
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.Create}>
      <input name='description' value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Adicione uma nova tarefa' className={styles.TextInput} />
      <button type="submit" className={styles.CreateButton}>
        Criar
        <img src={Plus} alt="Plus" />
      </button>
    </form>
  )
}