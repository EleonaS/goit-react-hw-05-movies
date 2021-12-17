import { NavLink } from 'react-router-dom';
import {
  StyledNav,
  WrapperNav,
  StyledLabel,
} from './Navigation.styled';
function Navigation() {
  return (
    <WrapperNav>
      <StyledNav>
        <NavLink to="/">
          <StyledLabel>
            Home
          </StyledLabel>
        </NavLink>
        <NavLink to="/movies">
          <StyledLabel>
            {' '}
            Movies
          </StyledLabel>
        </NavLink>
      </StyledNav>
    </WrapperNav>
  );
}

export { Navigation };
