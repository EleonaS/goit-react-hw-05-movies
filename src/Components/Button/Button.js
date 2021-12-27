import React from 'react';
import PropTypes from 'prop-types';
//import { useNavigate } from 'react-router-dom';
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

//
import {
  Link,
  useLocation,
} from 'react-router-dom';

function GoBackButton() {
  const location = useLocation();
  const pathname =
    location.state?.from?.pathname;
  const search =
    location.state?.from?.search;

  return (
    <WraperButton>
      <Link
        to={
          pathname
            ? `${pathname}${search}`
            : '/'
        }
      >
        <StyledButton type="button">
          Go Back
        </StyledButton>
      </Link>
    </WraperButton>
  );
}

GoBackButton.propTypes = {
  onClick: PropTypes.func,
};

export { GoBackButton };
