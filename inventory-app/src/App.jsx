import { useState, useEffect } from 'react'
import AddItemForm from './components/AddItemForm.jsx'
import InventoryList from './components/InventoryList.jsx'
import { loadInventory, saveInventory } from './utils/storage.js'
import './App.css'

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(loadInventory())
  }, [])

  useEffect(() => {
    saveInventory(items)
  }, [items])

  const addItem = (item) => {
    setItems([...items, item])
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Inventory Manager</h1>
      <AddItemForm onAdd={addItem} />
      <InventoryList items={items} onDelete={deleteItem} />
    </div>
  )
}
