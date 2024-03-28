import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [serverMessage, setServerMessage] = useState(undefined);

  const getStatus = () => {
    axios.get(`/rest/public`).then((result) => {
      setServerMessage(result.data.message);
    });
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <div>
      <h1>React App</h1>
      <div>
        <p>Response from Express server is: {serverMessage}</p>
      </div>
    </div>
  );
}

export default App;
