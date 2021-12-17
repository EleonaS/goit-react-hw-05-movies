import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

const Container = ({ children }) => (
  <StyledContainer>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node,
};
export { Container };
