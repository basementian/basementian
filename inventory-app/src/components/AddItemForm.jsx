import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddItemForm({ onAdd }) {
  const [form, setForm] = useState({
    code: '',
    name: '',
    quantity: '',
    category: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.code || !form.name) return;

    onAdd({
      id: nanoid(),
      ...form,
      quantity: parseInt(form.quantity) || 0
    });

    setForm({ code: '', name: '', quantity: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input name="code" placeholder="Part Code" value={form.code} onChange={handleChange} required />
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItemForm;
