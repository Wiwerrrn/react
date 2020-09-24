import React, { useEffect, useState, useReducer } from 'react';
import './App.css';


// http://api.tvmaze.com/singlesearch/shows?q=girls
function dataFetchReducer(state, action) {
  switch(action.type) {
    case "FETCH_START":
      console.log('loading');
      return {...state, loading: true}
    case "FETCH_SUCCESS":
      console.log(action.data)
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case "FETCH_FAILED": 
    console.log(action.error)
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error
      }
  }
}

function App() {
  // const [fetchedData, setFetchedData] = useState(null);
  // const [error, setError] = useState(null);
  const [movie, setMovie] = useState('girls');
  // const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(
    dataFetchReducer,
    {
      data: null,
      error: null,
      loading: true,
    }
  )
  useEffect(() => {
    const myFetch = async () => {
    dispatch({type: "FETCH_START"});
    //setIsLoading(true);
    
    
    try {
      const response = await fetch(`http://api.tvmaze.com/singlesearch/shows?q=${movie}`);
      const responseParsed = await response.json();
      //setFetchedData(responseParsed);
      //setIsLoading(false);
      dispatch({type: "FETCH_SUCCESS", data: responseParsed});


    } catch(error) {
      dispatch({type: "FETCH_FAILED", error: error});
      //setError(error);
      //setIsLoading(false);
      //console.log('error:', error);
    }
  }
    myFetch();
  }, [movie]);
 
  //console.log('fetchedData',fetchedData);
  
  if (state.isLoading) {
    return <p> Loading...</p>
  }

  if (state.error) {
    return <p> error</p>
  }

  return (
    <div className="App">
    <h2>Movies</h2>
     <button 
      className="Button"
      onClick={() => setMovie("game-of-thrones")}>
      change movie
     </button>
    </div>
  );
}

export default App;
