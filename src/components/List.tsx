import { useEffect, useState } from 'react';
import styles from './List.module.css'
import { ListItem } from './ListItem'
import { v4 as uuidv4 } from 'uuid'

interface ListProps {
  newItem: string;
}

export function List({ newItem }: ListProps) {
  const [items, setItems] = useState([{
    id: uuidv4(),
    isChecked: false,
    description: 'Uma task de exemplo',
  }])

  const [finishedItems, setFinishedItems] = useState(0);

  const handleCheckOrUncheckItem = (id: string) => {
    const newItemsWithCheckUpdated = items.map(item => ({ ...item, isChecked: item.id === id ? !item.isChecked : item.isChecked }));
    setItems(newItemsWithCheckUpdated)
  }

  const handleDeleteItem = (id: string) => {
    const itemsWithoutDeletedItem = items.filter(item => item.id !== id)
    
    setItems(itemsWithoutDeletedItem)
  }

  useEffect(() => {
    setFinishedItems(items.filter(item => item.isChecked === true).length)
  }, [items]);

  useEffect(() => {
    if(newItem !== ''){
      setItems([...items, {id: uuidv4(), isChecked: false, description: newItem }])
    }
  }, [newItem])

  return (
    <>
      <div className={styles.Headerlist}>
        <div className={styles.ContainerCreated}>
          <p>Tarefas criadas <span>{items.length}</span></p>
        </div>

        <div className={styles.ContainerFinished}>
          <p>Concluídas <span>{finishedItems} de {items.length}</span></p>
        </div>
      </div>
      <div className={styles.Contentlist}>
        {items.map((item) => {
          return <ListItem key={item.id} id={item.id} handleCheckOrUncheckItem={handleCheckOrUncheckItem} handleDeleteItem={handleDeleteItem} isChecked={item.isChecked} description={item.description} />
        })}
      </div>
    </>
  )
}