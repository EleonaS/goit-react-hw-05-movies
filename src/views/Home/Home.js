import {
  useState,
  useEffect,
} from 'react';
//import { toast } from "react-toastify";

import { fetchTrendingMovies } from 'services/api';
import { MoviesList } from 'Components/MoviesList/MoviesList';
import { Loader } from 'Components/Loader/Loader';
import { Heading } from 'Components/Heading/Heading';
import { LoadMoreBtn } from 'Components/LoadMoreBtn/LoadMoreBtn';
import { Container } from 'Components/Container/Container';
//import toast from "react-hot-toast";

//лекции
/*g
const Status = {
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function MovieView() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchTrendingMovies()
      .then((request) => setMovies(request.results))
      .then(setStatus(Status.RESOLVED))
      .catch((err) => {
        console.log(error);
        setError(Status.REJECTED);
      });
  }, [error]);

  if (status === Status.PENDING) {
    return <Loader/>;
  }

  if (status === Status.REJECTED) {
    return toast.error("!!!Page not found", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (status === Status.RESOLVED) {
    return (
      <>
      <Container>
        <Heading text="Trending today" />
        <MovieList movies={movies}></MovieList>
      </Container>
      </>
    );
  }
};
*/

///// ИЗ ПРАКТИКИ
export default function MovieView() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(
    [],
  );
  const [isLoading, setIsLoading] =
    useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies(page)
      .then(request =>
        setMovies(request.results),
      )
      .catch(error =>
        console.log(error),
      )
      .finally(() => {
        setIsLoading(false);

        window.scrollTo({
          top: document.documentElement
            .scrollHeight,
          behavior: 'smooth',
        });
      });
  }, [page]);

  function handleLoadMore() {
    setPage(prev => prev + 1);
  }
  return (
    <>
      <Container>
        <Heading text="Trending today" />
        {movies.length > 0 && (
          <>
            <MoviesList
              movies={movies}
            />
            <LoadMoreBtn
              onClick={handleLoadMore}
            />
          </>
        )}
      </Container>
      {isLoading && <Loader />}
    </>
  );
}
