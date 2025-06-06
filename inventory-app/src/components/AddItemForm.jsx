import { useState } from 'react'

export default function AddItemForm({ onAdd }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !quantity) return
    onAdd({
      id: Date.now(),
      name,
      quantity: Number(quantity),
      category,
    })
    setName('')
    setQuantity('')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Qty"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
