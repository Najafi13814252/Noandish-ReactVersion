// import { cookies } from "next/headers"

const API_URL = process.env.NEXT_PUBLIC_API_URL

async function apiFetchServer(endpoint: string, options: RequestInit = {}) {
    // const cookieStore = await cookies()
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      // Cookie: cookieStore.toString(),
      ...options?.headers,
    },
    ...options
  })

  const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Request failed')
    }

    return data
}

export default apiFetchServer