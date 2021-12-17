import styled from 'styled-components';

const MovieItem = styled.div`
  /*height: auto;
 background-color: wheat;*/
  list-style: none;
  text-decoration: none;
  /*position: relative;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;*/
`;

const Poster = styled.img`
  width: 300px;
  height: 400px;
`;

const MovieInfo = styled.div`
  text-align: center;
  /*padding: ;
*/
  font-size: 20px;
`;

const Title = styled.h3`
  position: relative;
  font-weight: 600;
  color: brown;
`;

const WrapperInfo = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  position: relative;

  bottom: 0px;
  margin: 0px;
`;

const Date = styled.p`
  color: black;
`;

const VoteAverage = styled.p`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  color: #000;
  background-color: orange;
`;

export {
  MovieItem,
  Poster,
  MovieInfo,
  Title,
  Date,
  VoteAverage,
  WrapperInfo,
};
