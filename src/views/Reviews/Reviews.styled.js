import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 10px
    rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: inset 0 5px 10px
      rgba(0, 0, 0, 0.5);
  }
`;

const ReviewsList = styled.ul`
  list-style: none;
`;

const ReviewsItem = styled.li``;

const ReviewsTitle = styled.h3`
  visibility: hidden;
  margin: 0 auto;
  padding: 0;
`;

const Title = styled.p`
  margin-left: ;
  font-size: ;
  font-weight: ;
`;

const Text = styled.p``;

const NotFound = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: black;
  background: tomato;
`;

export {
  Wrapper,
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  NotFound,
  Title,
  Text,
};
