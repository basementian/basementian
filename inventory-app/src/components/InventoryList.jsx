export default function InventoryList({ items, onDelete }) {
  if (items.length === 0) {
    return <p>No items</p>
  }
  return (
    <ul className="inventory-list">
      {items.map((item, idx) => (
        <li key={idx}>
          <span>{item.name} - {item.quantity}</span>
          {item.category && <em> ({item.category})</em>}
          <button onClick={() => onDelete(idx)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
