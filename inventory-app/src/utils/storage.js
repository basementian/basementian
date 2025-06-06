export function loadInventory() {
  try {
    const data = localStorage.getItem('inventory-items')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveInventory(items) {
  try {
    localStorage.setItem('inventory-items', JSON.stringify(items))
  } catch {
    // ignore write errors
  }
}
