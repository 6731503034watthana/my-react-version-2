const BASE = '/api'

export async function postJson(path, data) {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error(await res.text() || `HTTP ${res.status}`)
  return res.json()
}
