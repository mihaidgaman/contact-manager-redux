import axios from 'axios';
import { useEffect, useState } from 'react';

const baseUrl = import.meta.env.VITE_SERVER_URI;

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(`${baseUrl}/profile`)
      .then((response) => {
        const { data } = response;

        setName(data.name);
      })
      .catch((response) => {
        const { code } = response;

        if (code === 'ERR_NETWORK') {
          setMessage('Could not fetch data');
        }
      });
  }, []);

  if (message.trim().length > 0) {
    return <div>{message}</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {name.trim().length <= 0 ? '...loading' : name}
      </h1>
    </>
  );
}

export default App;
