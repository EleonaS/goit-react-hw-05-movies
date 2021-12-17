import {
  Link,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieDetailsCard } from '../MovieDetailsPage/MovieDetailsPage';
import {
  StyledList,
  Item,
} from './MoviesList.styled';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <StyledList>
      {movies.map(
        ({
          id,
          title,
          original_name,
          poster_path,
          release_date,
          vote_average,
        }) => (
          <Item key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <MovieDetailsCard
                id={id}
                title={title}
                original_name={
                  original_name
                }
                poster_path={
                  poster_path
                }
                release_date={
                  release_date
                }
                vote_average={
                  vote_average
                }
              />
            </Link>
          </Item>
        ),
      )}
    </StyledList>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export { MoviesList };
