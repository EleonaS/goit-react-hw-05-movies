import styled from 'styled-components';

const MovieCard = styled.div`
  /* display: flex;
flex-direction: row;*/
  max-width: 1000px;
  border-radius: 10px;

  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  color: inherit;
  background-color: whitesmoke;
  /*box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3); */
  box-shadow: 0px 1px 3px 0px
      rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms
      cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms
      cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    /*transform: scale(1.03);*/
    background-color: beige;
    cursor: zoom-in;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0
      10px 5px;
  }
`;

const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const WrapperAdditional = styled.div`
  /*width: 300px;
  background-color: tomato;
  margin-right: auto;
  margin-left: auto;*/
`;

const StyledPoster = styled.img`
  display: block;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  margin-top: auto;
  margin-bottom: auto;
  box-shadow: 0 1px 3px 0
      rgb(0 0 0 / 20%),
    0 2px 5px 0 rgb(0 0 0 / 14%),
    0 2px 10px -1px rgb(0 0 0 / 12%);
`;

const Content = styled.div`
  padding: 20px 20px 20px 20px;
`;

const Info = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;
  color: brown;
`;

const StyledTitle = styled.h2`
  color: brown;
  font-size: 30px;
  font-weight: 700;
`;
const GenresList = styled.ul`
  padding-left: 0;
`;

const GenresListItem = styled.li``;

const StyledRating = styled.span`
  width: 30px;
  height: 30px;
  padding: 5px;

  border-radius: 50%;
  color: #000;
  background-color: orange;
`;
/*const StyledListItem = styled.li`
`;*/

const StyledNav = styled.ul`
  margin-top: 10px;
  display: flex;
`;
export {
  MovieCard,
  WrapperCard,
  StyledPoster,
  Content,
  Info,
  StyledTitle,
  GenresList,
  GenresListItem,
  StyledRating,
  StyledNav,
  WrapperAdditional,
};
