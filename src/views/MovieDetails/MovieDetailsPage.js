import {
  //lazy,
  //Suspense
  useRef,
} from 'react';
import {
  useEffect,
  useState,
} from 'react';
import {
  useParams,
  useLocation,
} from 'react-router';
import {
  // Routes,
  //Route,
  //Link,
  NavLink,
  Outlet,
  useNavigate,
} from 'react-router-dom';
//import { toast } from 'react-toastify';
import {
  fetchMovieDetails,
  POSTER_URL,
} from '../../services/api';

//import { Loader } from 'Components/Loader/Loader';
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

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(
    {},
  );

  const useGoBack = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const routerState = useRef(
      location.state?.from,
    ).current;

    const goBack = () => {
      navigate(routerState ?? '/');
    };

    return goBack;
  };

  const onGoBack = useGoBack();

  //const onGoBack = () => navigate(-1);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  return (
    <>
      <GoBackButton
        onClick={onGoBack}
        type="button"
        text="Go back"
      />

      <MovieCard id={movieId}>
        <WrapperCard>
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
  );
}

export default MovieDetailsPage;
