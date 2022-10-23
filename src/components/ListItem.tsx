import { Trash } from "phosphor-react";
import { useState } from "react";

import styles from './ListItem.module.css'

interface LisItemProps {
  id: string;
  isChecked: boolean;
  description: string;
  handleCheckOrUncheckItem: (id: string) => void;
  handleDeleteItem: (id: string) => void;
}

export function ListItem({ id, isChecked, description, handleCheckOrUncheckItem, handleDeleteItem }: LisItemProps) {
  const [isItemChecked, setIsItemChecked] = useState(isChecked)
  
  function handleCheckItem() {
    setIsItemChecked(!isItemChecked)
    handleCheckOrUncheckItem(id)
  }

  return (
    <div className={styles.listItem}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" checked={isItemChecked} onChange={handleCheckItem}/>
        <span className={styles.checkboxCheck}></span>
      </label>
      <p className={isItemChecked ? styles.descriptionItemChecked : styles.descriptionItem}>{description}</p>
      <button className={styles.buttonItem} onClick={() => handleDeleteItem(id)}><Trash size={24} /></button>
    </div>
  )
}