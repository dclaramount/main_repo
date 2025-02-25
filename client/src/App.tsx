import React, { useEffect, useState } from 'react';
import './App.css'; // Optional: Include styles for the App component

// Define the type for the API response
interface ApiResponse {
  message: string;
}

const App: React.FC = () => {
  const [apiMessage, setApiMessage] = useState<string>(''); // State to store the API response
  const [loading, setLoading] = useState<boolean>(true); // State to track loading

  // Fetch data from the backend API
  useEffect(() => {
    const fetchApiMessage = async () => {
      try {
        const response = await fetch('/api'); // Call the Express API (proxy is assumed to be configured)
        const data: ApiResponse = await response.json();
        setApiMessage(data.message); // Set the message from the API response
      } catch (error) {
        console.error('Error fetching data:', error);
        setApiMessage('Failed to fetch data from the server.');
      } finally {
        setLoading(false);
      }
    };

    fetchApiMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React + Express App</h1>
      </header>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>Message from server: {apiMessage}</p>
        )}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Fullstack App</p>
      </footer>
    </div>
  );
};

export default App;
