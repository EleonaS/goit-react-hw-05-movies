import { StyledButton } from '../Button/Button.styled';

const LoadMoreBtn = ({ onClick }) => (
  <StyledButton
    type="button"
    onClick={onClick}
  >
    Load more
  </StyledButton>
);
export { LoadMoreBtn };
