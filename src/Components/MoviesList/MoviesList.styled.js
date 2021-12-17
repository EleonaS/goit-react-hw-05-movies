import styled from 'styled-components';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  );
  gap: 20px;
  margin-bottom: 40px;
`;

///
const Item = styled.li`
  cursor: pointer;
  border-radius: 5px;
  background-color: whitesmoke;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px
      rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms
      cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms
      cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    background-color: whitesmoke;
    cursor: zoom-in;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0
      10px 5px;
  }
`;

export { StyledList, Item };
