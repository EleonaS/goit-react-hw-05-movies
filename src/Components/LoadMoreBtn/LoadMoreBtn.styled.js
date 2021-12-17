import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;

  width: 200px;
  padding: 5px 10px;
  cursor: pointer;
  border: 2px solid green;
  border-radius: 7px;
  font-size: 18px;
  text-transform: uppercase;
  color: black;
  background-color: transparent;
  transition: all 250ms ease-in-out;
  &:hover {
    border-color: gray;
    color: green;
    font-weight: 600;
    background-color: white;
  }
`;

export { StyledButton };
