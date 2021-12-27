import { StyledButton } from '../Button/Button.styled';
import { WraperButton } from '../LoadMoreBtn/LoadMoreBtn.styled';

const LoadMoreBtn = ({ onClick }) => (
  <WraperButton>
    <StyledButton
      type="button"
      onClick={onClick}
    >
      Load more
    </StyledButton>
  </WraperButton>
);
export { LoadMoreBtn };
