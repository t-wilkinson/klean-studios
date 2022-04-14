const API_URL = 'http://localhost:1337/api'

export async function getApi(url) {
  const response = await fetch(`${API_URL}${url}`)
  const data = response.ok && (await response.json()).data || undefined
  return {
    data,
    status: response.status
  }
}

export function getAttributes(data) {
  return data.map(({attributes}) => attributes)
}
