import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  StyledButton,
  WraperButton,
} from './Button.styled';

//https://reacttraining.com/blog/react-router-v6-pre/

function GoBackButton() {
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

GoBackButton.propTypes = {
  onClick: PropTypes.func,
};

export { GoBackButton };
