import { useEffect, useState } from 'react';

export default function SafeFetch() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { signal: controller.signal })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        if (err.name !== 'AbortError') console.error(err);
      });

    return () => controller.abort();
  }, [id]);

  return (
    <>
      <button onClick={() => setId(id + 1)}>Cargar siguiente post</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}