import { useEffect, useState } from 'react'
import './App.css'


const api = import.meta.env.VITE_NODE_SERVICE_URL;

type Message = { message: string };

function App() {
  const [data, setData] = useState<Message[]>([]);

  const getMessages = async () => {
    const response = await fetch(`${api}/events`);
    const { messages } = await response.json();
    setData(messages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  const onCreateMessage = async () => {
    await fetch(`${api}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'hello world' })
    });
    getMessages();
  };

  return (
    <>
      <header>
        <h1>Messages</h1>
      </header>
      <main>
        <button onClick={onCreateMessage}>create new hello world</button>
        <ol>
          {data.map((message, index) => (
            <li key={index}>{message.message}</li>
          ))}
        </ol>
      </main>
    </>
  )
}

export default App
