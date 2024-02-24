import {test, expect, vi} from 'vitest'
import Fetcher from '../fetcher'

test('Fetcher should fetch data from the API', async () => {
  const mockResponse = {data: 'mock data'}
  global.fetch = vi.fn().mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    }),
  )

  const data = await Fetcher(['https://example.com/api/data', 'GET'])

  // Check if fetch function was called with correct URL
  expect(global.fetch).toHaveBeenCalledWith('https://example.com/api/data', {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Check if Fetcher returns the correct data
  expect(data).toEqual(mockResponse)
})
