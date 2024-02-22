import { useEffect, useState } from 'react';
import { client } from './api/test';
import { Button } from './components/ui/Button';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(({ counter }) => {
    return counter;
  });

  useEffect(() => {
    client
      .get(`/profile`)
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

        <Button>aici se proiecteaza children elements</Button>

        <div className="mt-14">
          <button
            onClick={() => {
              dispatch({
                type: 'decrement',
              });
            }}
          >
            -
          </button>

          <span className="mx-8">{state}</span>

          <button
            onClick={() => {
              dispatch({
                type: 'increment',
              });
            }}
          >
            +
          </button>
        </div>

        <button
          onClick={() => {
            dispatch({
              type: 'add',
            });
          }}
        >
          Add 42
        </button>
      </h1>
    </>
  );
}

export default App;
