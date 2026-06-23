import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '81b9wt7e',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getHomePage() {
  const data = await client.fetch(`*[_type == "homePage"][0]`)
  return data
}
