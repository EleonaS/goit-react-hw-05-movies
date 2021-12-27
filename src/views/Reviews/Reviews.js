import {
  useState,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../../services/api';
import {
  Wrapper,
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  NotFound,
  Title,
  Text,
} from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] =
    useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(request =>
        setReviews(request.results),
      )
      .catch(error =>
        console.log(error),
      );
  }, [movieId]);

  return (
    <Wrapper>
      {reviews.length > 0 ? (
        <>
          <ReviewsTitle>
            Reviews
          </ReviewsTitle>
          <ReviewsList>
            {reviews.map(
              (item, index) => (
                <ReviewsItem
                  key={index}
                >
                  <Title>
                    {item.author}:
                  </Title>
                  <Text>
                    "{item.content}"
                  </Text>
                </ReviewsItem>
              ),
            )}
          </ReviewsList>
        </>
      ) : (
        <NotFound>
          We don't have any reviews for
          this movie.
        </NotFound>
      )}
    </Wrapper>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
