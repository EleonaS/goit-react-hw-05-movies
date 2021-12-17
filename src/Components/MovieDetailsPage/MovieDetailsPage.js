import PropTypes from 'prop-types';
import defaultImage from '../../images/defaultImage.jpg';
import {
  MovieItem,
  Poster,
  MovieInfo,
  Title,
  Date,
  VoteAverage,
  WrapperInfo,
} from './MovieDetailsPage.styled';

function MovieDetailsCard({
  id,
  title,
  original_name,
  poster_path,
  release_date,
  vote_average,
}) {
  return (
    <MovieItem id={id}>
      <Poster
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImage
        }
        alt={'poster'}
      />
      <MovieInfo>
        <Title>
          {title
            ? title
            : original_name}
        </Title>

        <WrapperInfo>
          <Date>
            {release_date
              ? parseInt(release_date)
              : ''}
          </Date>
          <VoteAverage>
            {vote_average}
          </VoteAverage>
        </WrapperInfo>
      </MovieInfo>
    </MovieItem>
  );
}

MovieDetailsCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  original_name: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
};

export { MovieDetailsCard };
