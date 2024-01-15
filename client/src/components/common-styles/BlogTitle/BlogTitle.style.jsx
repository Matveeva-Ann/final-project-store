import styled from '@emotion/styled';

export const BlogTitleStyle = styled.p`
  color: var(--textColorSecondary);
  font-family: 'Montserrat', Sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: start;
  padding: 0 10px;
  @media (width < 770px) {
    font-size: 4.4vw;
    line-height: 4.4vw;
  }
`;

export const DateStyle = styled.time`
  display: block;
  width: 100%;
  color: #968460;
  text-align: start;
  padding: 10px 0;
  &::before {
    content: '';
    position: relative;
    display: inline-block;
    border-top: 2px solid #968460;
    max-width: 170px;
    width: 100%;
    margin-right: 10px;
    top: -5px;
    left: 0;
    @media (width < 370px) {
      max-width: 100px;
    }
  }
`;
