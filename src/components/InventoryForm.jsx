import { useState } from 'react';
import { db } from '../db/db';

export default function InventoryForm({ onAdd }) {
  const [item, setItem] = useState({
    sku: '', name: '', quantity: '', category: ''
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!item.sku || !item.name || !item.quantity) return;

    await db.items.add({ ...item, quantity: Number(item.quantity) });
    onAdd();
    setItem({ sku: '', name: '', quantity: '', category: '' });
  };

  return (
    <form className="p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
      <input className="input" name="sku" placeholder="SKU" value={item.sku} onChange={handleChange} />
      <input className="input" name="name" placeholder="Name" value={item.name} onChange={handleChange} />
      <input className="input" name="quantity" type="number" placeholder="Qty" value={item.quantity} onChange={handleChange} />
      <input className="input" name="category" placeholder="Category" value={item.category} onChange={handleChange} />
      <button className="bg-black text-white px-3 py-1 rounded mt-2">Add Item</button>
    </form>
  );
}
