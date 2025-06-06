import { useState, useEffect } from 'react'
import AddItemForm from './components/AddItemForm.jsx'
import InventoryList from './components/InventoryList.jsx'
import { loadItems, saveItems } from './utils/storage.js'
import './App.css'

export default function App() {
  const [items, setItems] = useState(() => loadItems())

  useEffect(() => {
    saveItems(items)
  }, [items])

  const addItem = (item) => {
    setItems([...items, item])
  }

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className="app">
      <h1>Inventory</h1>
      <AddItemForm onAdd={addItem} />
      <InventoryList items={items} onDelete={deleteItem} />
    </div>
  )
}
