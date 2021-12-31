import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
  WraperButton,
} from './Button.styled';

//https://reacttraining.com/blog/react-router-v6-pre/

/*function GoBackButton() {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <WraperButton>
      <StyledButton
        type="button"
        onClick={onGoBack}
      >
        Go Back
      </StyledButton>
    </WraperButton>
  );
}
*/
function GoBackButton({
  type,
  text,
  onClick,
  children,
}) {
  return (
    <WraperButton>
      <StyledButton
        type={type}
        onClick={onClick}
      >
        {text}
        {children}
      </StyledButton>
    </WraperButton>
  );
}

GoBackButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export { GoBackButton };
