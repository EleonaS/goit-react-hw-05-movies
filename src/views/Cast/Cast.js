import {
  useState,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  fetchMovieCast,
  POSTER_URL,
} from '../../services/api';
import {
  CastList,
  CastItem,
  CastImage,
  CastAbout,
  StyledName,
  StyledCharacter,
} from './Cast.styled';

import {
  Wrapper,
  NotFound,
} from 'views/Reviews/Reviews.styled';

import default_profile from 'images/default_profile.png';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams(null);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(request =>
        setCast(request.cast),
      )
      .catch(error =>
        console.log(error),
      );
  }, [movieId]);

  return (
    <Wrapper>
      <CastList>
        {cast.length > 0 ? (
          cast.map(
            ({
              id,
              profile_path,
              name,
              character,
            }) => (
              <CastItem key={id}>
                {profile_path ? (
                  <CastImage
                    src={
                      POSTER_URL +
                      profile_path
                    }
                    alt={name}
                    width="200"
                  />
                ) : (
                  <div>
                    <CastImage
                      src={
                        default_profile
                      }
                      alt={name}
                    />
                  </div>
                )}

                <CastAbout>
                  <StyledName>
                    {name}
                  </StyledName>
                  <p>Character: </p>
                  <StyledCharacter>
                    {
                      character
                      // || "Unknown"
                    }
                  </StyledCharacter>
                </CastAbout>
              </CastItem>
            ),
          )
        ) : (
          <NotFound>
            No details on the cast
          </NotFound>
        )}
      </CastList>
    </Wrapper>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;

//1v
/*export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast()
      .then((request) => setCast(request.cast))
      .catch(error =>
        console.log(error),
      );
  }, [movieId]);

  return (
  <>
    { cast && (
    <Wrapper>
      <CastList>
          {cast.map((item, id) => (
            <>
              {item.profile_path && (
                <CastItem key={id}>
               
                  <CastImage
                    src={
                      POSTER_URL +
                      item.profile_path
                    }
                    alt={item.name}
                    width="200"
                  />
                  <CastAbout>
                    <StyledName>
                      {item.name}
                    </StyledName>
                    <StyledCharacter>
                      {item.character}
                    </StyledCharacter>
                  </CastAbout>
                </CastItem>)}
            </>
          ))}
      </CastList>
        </Wrapper>)};
    </>
);
};

Cast.propTypes = {
  movieId: PropTypes.string,
};
*/
