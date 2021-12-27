//import {
//lazy,
//Suspense
//} from 'react';
import {
  useEffect,
  useState,
} from 'react';
import {
  useParams,
  // Routes,
  //Route,
  NavLink,
  Outlet,
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
  WrapperCard,
  WrapperAdditional,
} from './MovieDetailsPage.styiled';
import { StyledButton } from 'Components/Button/Button.styled';
import { active } from 'Components/Navigation/Navigation';
/*const Cast = lazy(
  () =>
    import(
      '../Cast/Cast'
    ) /* webpackChunkName: "cast-page" ,*/
//);
/*const Reviews = lazy(
  () => import('../Reviews/Reviews'),
  /* webpackChunkName: "reviews-page" */
//);*/

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function MovieDetailsPage() {
  const { movieId } = useParams(null);
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
        <>
          <MovieCard>
            <WrapperCard>
              <StyledPoster
                src={
                  POSTER_URL +
                  movie.poster_path
                }
                alt={
                  movie.original_title
                }
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
                        (
                          item,
                          index,
                        ) => (
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
              </Content>
            </WrapperCard>
            <br />
            <hr />

            <WrapperAdditional>
              <Info>
                Additional information:
              </Info>
              <StyledNav>
                <NavLink
                  to={`/movies/${movieId}/cast`}
                  style={active}
                >
                  <StyledButton>
                    Cast
                  </StyledButton>
                </NavLink>
                <NavLink
                  to={`/movies/${movieId}/reviews`}
                  style={active}
                >
                  <StyledButton>
                    Reviews
                  </StyledButton>
                </NavLink>
              </StyledNav>
            </WrapperAdditional>
            <Outlet />
          </MovieCard>
        </>
      </>
    );
  }
}
export default MovieDetailsPage;
