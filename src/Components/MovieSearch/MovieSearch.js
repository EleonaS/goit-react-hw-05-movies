/*import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchMoviesByName } from "../../Services/API";
import { GoBackButton } from "Components/Button/Button";
import { Loader } from "Components/Loader/Loader";
import { MoviesList } from "Components/MoviesList/MoviesList";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

function MoviesSearchList({ movieName, queryURL }) {
  const [error] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = (name) => {
      fetchMoviesByName(name)
        .then((newMovie) => {
          if (newMovie.total_results === 0) {
            toast.dark("Incorrect!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (newMovie.total_results > 0) {
            setMovies(newMovie.results);
            setStatus(Status.RESOLVED);
          }
        })
        .catch((err) => {
          console.log(error);
        });
    };

    if (movieName === "" && queryURL !== null) {
      fetchMovies(queryURL);
      return;
    }
    if (movieName) {
      fetchMovies(movieName);
    }
  }, [movieName, error, queryURL]);

  if (status === Status.IDLE) {
    return " ";
  }

  if (status === Status.PENDING) {
    return <Loader/>;
  }

  if (status === Status.REJECTED) {
    return toast.dark("Page not found", {
      position: "top-center",
      autoClose: 3200,
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
        <GoBackButton/>
        <MoviesList movies={movies} />
      </>
    );
  }
};

export { MoviesSearchList };
*/

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
import { LoadMoreBtn } from 'Components/LoadMoreBtn/LoadMoreBtn';

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

  const [page, setPage] = useState(1);

  useEffect(() => {
    function fetchMovies(name) {
      setIsLoading(true);
      fetchMoviesByName(name, page)
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
  }, [
    movieName,
    error,
    queryURL,
    page,
  ]);

  function handleLoadMore() {
    setPage(prev => prev + 1);
  }

  return (
    <>
      {isLoading && <Loader />}
      <GoBackButton />
      {movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
      {movies.length > 11 && (
        <LoadMoreBtn
          type="button"
          onClick={handleLoadMore}
        />
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
    </>
  );
}

export { MoviesSearchList };
