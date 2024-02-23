import { useEffect, useState } from 'react'
import './App.css'


const api = import.meta.env.VITE_NODE_SERVICE_URL;

function App() {
  const [data, setData] = useState<{ hello?: string}>({});

  useEffect(() => {
    const testConnection = async () => {
      const response = await fetch(`${api}/events`);
      const newData = await response.json();
      setData(newData);
    }
    testConnection();
  }, []);

  return (
    <>
      hello {data.hello ?? 'fail'}
    </>
  )
}

export default App
