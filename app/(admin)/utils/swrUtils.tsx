type SWRTypeFormat = {
  error: any
  isLoading: boolean
  size?: number
  setSize?: any
  mutate?: any
}

const fetcher = async (url: string) =>
  fetch(url, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())

const config = {
  initialSize: 1,
  revalidateAll: true,
  revalidateFirstPage: false,
  revalidateIfStale: true,
  revalidateOnReconnect: true,
  persistSize: false,
  parallel: false,
}

export {fetcher, config}

export type {SWRTypeFormat}
