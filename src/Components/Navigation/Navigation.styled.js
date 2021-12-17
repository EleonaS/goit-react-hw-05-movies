import styled from 'styled-components';

const WrapperNav = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledNav = styled.nav`
  justify-content: space-around;
  font-weight: 600;
  display: flex;
  flex-direction: row;

  font-size: 20px;

  border: none;
  text-transform: uppercase;
  /*color: #000;*/
`;
const StyledLabel = styled.span`
  margin-right: 20px;
  margin-left: 20px;
`;
export {
  StyledNav,
  WrapperNav,
  StyledLabel,
};
/* УТОЧНИТЬ АКТИВ
  
   style={
    ({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
}}
 */
