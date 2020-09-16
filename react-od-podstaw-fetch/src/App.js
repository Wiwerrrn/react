import React, { useEffect, useState, useReducer } from 'react';
import './App.css';


// http://api.tvmaze.com/singlesearch/shows?q=girls

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState('girls');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  const myFetch = async () => {
    setIsLoading(true);
    
    const response = await fetch(`http://api.tvmaze.com/singlesearch/shows?q=${movie}`);
    try {
      const responseParsed = await response.json();
      setFetchedData(responseParsed);
      setIsLoading(false);

    } catch(error) {
      setError(error);
      setIsLoading(false);
      console.log('lalla', error);
    }
  }
    setIsLoading(false);
    myFetch();
  }, [movie]);
 
  console.log(fetchedData);
  
  if (isLoading) {
    return <p> Loading...</p>
  }

  return (
    <div className="App">
    <h2>Movies</h2>
     <button 
      className="Button"
      onClick={() => setMovie("*")}>
      change movie
     </button>
    </div>
  );
}

export default App;
