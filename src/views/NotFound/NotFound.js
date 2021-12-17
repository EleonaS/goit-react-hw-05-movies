import { Link } from 'react-router-dom';
import {
  StyledTitle,
  StyledLink,
  Wrapper,
} from './NotFound.styled';

function NotFoundMovie() {
  return (
    <Wrapper>
      <StyledTitle>
        Page not found
      </StyledTitle>
      <StyledLink>
        <Link to="/">
          Return to the homepage
        </Link>
      </StyledLink>
    </Wrapper>
  );
}

export { NotFoundMovie };
