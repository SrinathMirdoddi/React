import { useState, useEffect } from 'react';

const useFetch = (url) => {

  const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch(url, { signal:abortCont.signal })
        .then(res => {
          if(!res.ok) {
            throw Error('could not found the loaded data in the server');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch(err => {
           if (err.name === 'AbortError') {
            console.log('fetch Aborted');
           } else {
            setPending(false);
            setError(err.message);
           }
        })
      }, 1000);

      return () => abortCont.abort();

    }, [url]);
    return { data, isPending, error}
}

export default useFetch;