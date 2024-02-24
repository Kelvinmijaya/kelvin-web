const Fetcher = async ([url, method]: string[]) =>
  fetch(url, {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())

export default Fetcher
