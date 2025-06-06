export default function InventoryList({ items, onDelete }) {
  if (items.length === 0) {
    return <p>No items</p>
  }
  return (
    <ul className="inventory-list">
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name} - {item.quantity}</span>
          {item.category && <em> ({item.category})</em>}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
