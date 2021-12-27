import styled from 'styled-components';

const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(150px, 1fr)
  );
  gap: 20px 10px;
  margin: 0 auto;
  /*margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;

  color: black;*/
`;

const CastItem = styled.li`
  border-radius: 10px;
  height: auto;
  overflow: hidden;
  box-shadow: 0 1px 3px 0
      rgb(0 0 0 / 20%),
    0 2px 5px 0 rgb(0 0 0 / 14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
`;

const CastImage = styled.img`
  /*width: 100%;*/
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
`;
const CastAbout = styled.div`
  padding: 5px;
`;

const StyledName = styled.h3`
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  color: brown;
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
