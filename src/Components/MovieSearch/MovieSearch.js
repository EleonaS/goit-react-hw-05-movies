import {
  useState,
  useEffect,
} from 'react';
import {
  toast,
  ToastContainer,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesByName } from '../../services/api';
import { GoBackButton } from 'Components/Button/Button';
import { Loader } from 'Components/Loader/Loader';
import { MoviesList } from 'Components/MoviesList/MoviesList';
import { Container } from 'Components/Container/Container';

function MoviesSearchList({
  movieName,
  queryURL,
}) {
  const [error, setError] =
    useState(null);

  const [isLoading, setIsLoading] =
    useState(false);

  const [movies, setMovies] = useState(
    [],
  );

  useEffect(() => {
    function fetchMovies(name) {
      setIsLoading(true);
      fetchMoviesByName(name)
        .then(newMovie =>
          newMovie.total_results > 0
            ? setMovies(
                newMovie.results,
              )
            : toast.warning(
                'Movie not found!!!',
              ),
        )
        .catch(error => {
          console.log(error);
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);

          window.scrollTo({
            top: document
              .documentElement
              .scrollHeight,
            behavior: 'smooth',
          });
        });
    }

    if (
      movieName === '' &&
      queryURL !== null
    ) {
      fetchMovies(queryURL);
      return;
    }
    if (movieName) {
      fetchMovies(movieName);
    }
  }, [movieName, queryURL, error]);

  return (
    <>
      <Container>
        {isLoading && <Loader />}
        <GoBackButton />
        {movies.length > 0 && (
          <>
            <MoviesList
              movies={movies}
            />
          </>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </>
  );
}

export { MoviesSearchList };
