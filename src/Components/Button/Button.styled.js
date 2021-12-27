import styled from 'styled-components';

const WraperButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const StyledButton = styled.button`
  margin-right: 20px;
  /*margin-left:20px;*/
  outline: none;
  cursor: pointer;
  padding: 5px 10px;

  border-radius: 5px;
  background-color: #f2b189;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  border: none;
  text-transform: uppercase;
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 500ms
      cubic-bezier(0.4, 0, 0.2, 1);
    color: brown;
  }
`;

export { StyledButton, WraperButton };
