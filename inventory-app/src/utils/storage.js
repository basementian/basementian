export function loadItems() {
  try {
    const data = localStorage.getItem('inventory-items')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveItems(items) {
  try {
    localStorage.setItem('inventory-items', JSON.stringify(items))
  } catch {
    // ignore write errors
  }
}
