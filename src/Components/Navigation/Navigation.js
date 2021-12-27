import { NavLink } from 'react-router-dom';
import {
  StyledNav,
  WrapperNav,
  StyledLabel,
} from './Navigation.styled';

const active = ({ isActive }) => {
  return {
    color: isActive ? 'red' : '',
  };
};

function Navigation() {
  return (
    <WrapperNav>
      <StyledNav>
        <NavLink to="/" style={active}>
          <StyledLabel>
            Home
          </StyledLabel>
        </NavLink>
        <NavLink
          to="/movies"
          style={active}
        >
          <StyledLabel>
            {' '}
            Movies
          </StyledLabel>
        </NavLink>
      </StyledNav>
    </WrapperNav>
  );
}

export { Navigation, active };
