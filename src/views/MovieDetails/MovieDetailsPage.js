import { lazy, Suspense } from 'react';
import {
  useEffect,
  useState,
} from 'react';
import {
  useParams,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  fetchMovieDetails,
  POSTER_URL,
} from '../../services/api';

import { Loader } from 'Components/Loader/Loader';
import { GoBackButton } from 'Components/Button/Button';

import {
  MovieCard,
  StyledPoster,
  Content,
  Info,
  StyledTitle,
  GenresList,
  GenresListItem,
  StyledRating,
  StyledNav,
} from './MovieDetailsPage.styiled';
import { StyledButton } from 'Components/Button/Button.styled';

const Cast = lazy(
  () =>
    import(
      '../Cast/Cast'
    ) /* webpackChunkName: "cast-page" */,
);
const Reviews = lazy(
  () => import('../Reviews/Reviews'),
  /* webpackChunkName: "reviews-page" */
);

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(
    {},
  );
  const [status, setStatus] = useState(
    Status.PENDING,
  );

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovieDetails(movieId)
      .then(setMovie)
      .then(setStatus(Status.RESOLVED))
      .catch(err => {
        console.log(err);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  if (status === Status.PENDING) {
    return <Loader />;
  }
  if (status === Status.REJECTED) {
    return toast.error(
      'Page not found',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  }
  if (status === Status.RESOLVED) {
    return (
      <>
        <GoBackButton />
        <MovieCard>
          <StyledPoster
            src={
              POSTER_URL +
              movie.poster_path
            }
            alt={movie.original_title}
          />
          <Content>
            <StyledTitle>
              {movie.original_title}
            </StyledTitle>
            <div>
              <Info>Rating:</Info>
              <StyledRating>
                {movie.vote_average}
              </StyledRating>
            </div>

            {movie.genres && (
              <>
                <Info>Genres:</Info>
                <GenresList>
                  {movie.genres.map(
                    (item, index) => (
                      <GenresListItem
                        key={index}
                      >
                        {item.name}
                      </GenresListItem>
                    ),
                  )}
                </GenresList>
              </>
            )}

            <div>
              <Info>About:</Info>
              <span>
                {movie.overview}
              </span>
            </div>
            <br />
            <hr />

            <div>
              <Info>
                Additional information:
              </Info>
              <StyledNav>
                <NavLink to="cast">
                  <StyledButton>
                    Cast
                  </StyledButton>
                </NavLink>
                <NavLink to="reviews">
                  <StyledButton>
                    Reviews
                  </StyledButton>
                </NavLink>
              </StyledNav>

              <Suspense
                fallback={<Loader />}
              >
                <Routes>
                  <Route
                    path="/cast"
                    element={<Cast />}
                  />
                  <Route
                    path="/reviews"
                    element={
                      <Reviews />
                    }
                  />
                </Routes>
              </Suspense>
            </div>
          </Content>
        </MovieCard>
      </>
    );
  }
}
export default MovieDetailsPage;
