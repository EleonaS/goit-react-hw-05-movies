import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  margin: 20px auto 20px auto;

  width: 100%;
  max-width: 600px;
  background-color: #fff;
  /*border-radius: 3px;*/
  overflow: hidden;
`;

const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 48px;
  border: 0;
  background: gray;
  color: black;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms
    cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

const ButtonLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  /* position: absolute;
width: 1px;
  height: 1px;
  padding: 0;
  
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;*/
`;

const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export {
  SearchForm,
  Button,
  ButtonLabel,
  SearchFormInput,
};
