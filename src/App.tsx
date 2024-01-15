import React, { useEffect } from 'react';
import { fetchShows } from './features/tvShows/tvShowsSlice';
import logo from './logo.svg';
import './App.css';
import {useAppSelector} from "./features/useAppSelector";
import {useAppDispatch} from "./features/useAppDispatch";

function App() {
  const dispatch = useAppDispatch();
  const { shows, status } = useAppSelector(state => state.tvShows);

  useEffect(() => {
    dispatch(fetchShows("Powerpuff Girls"));
  }, [dispatch]);
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.tsx</code> and save to reload.</p>
          {status === 'loading' && <p>Loading...</p>}
          {status === 'succeeded' && (
              <div>
                <h2>TV Shows:</h2>
                <ul>
                  {shows?.map(show => (
                      <li key={show.id}>{show.name}</li>
                  ))}
                </ul>
              </div>
          )}
          {status === 'failed' && <p>Failed to load TV shows.</p>}
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
