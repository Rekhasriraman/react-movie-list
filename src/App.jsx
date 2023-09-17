import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div>
      <Header text="Movies" />
      <SearchBar getInput={setSearchText} />
      <MovieList value={searchText} />
    </div>
  );
};

export default App;