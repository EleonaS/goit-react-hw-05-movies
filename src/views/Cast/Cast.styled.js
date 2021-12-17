import styled from 'styled-components';

const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  );
  gap: 20px 10px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;

  color: black;
`;

const CastItem = styled.li`
  height: auto;
  overflow: hidden;
`;

const CastImage = styled.img`
  object-fit: cover;
`;
const CastAbout = styled.div`
  padding: 5px;
`;

const StyledName = styled.h3`
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StyledCharacter = styled.h4`
  margin: 0 auto;
`;

export {
  CastList,
  CastItem,
  CastImage,
  CastAbout,
  StyledName,
  StyledCharacter,
};
