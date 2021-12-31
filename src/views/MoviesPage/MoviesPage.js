import { useState } from 'react';
import {
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Searchbar } from 'Components/Searchbar/Searchbar.js';
import { MoviesSearchList } from 'Components/MovieSearch/MovieSearch';
//import {Container} from "Components/Container/Container";
function MoviesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [movieName, setMovieName] =
    useState('');
  const [, setMovies] = useState([]);

  const queryURL = new URLSearchParams(
    location.search,
  ).get('query');

  const onQueryChange = query => {
    navigate({
      ...location,
      search: `query=${query}`,
    });
  };

  const onSubmit = name => {
    setMovieName(name);
    setMovies([]);
    onQueryChange(name);
  };

  return (
    <>
      <Searchbar
        onSubmit={onSubmit}
      ></Searchbar>
      <MoviesSearchList
        movieName={movieName}
        queryURL={queryURL}
      />
    </>
  );
}

//!!!!!default
export default MoviesPage;
