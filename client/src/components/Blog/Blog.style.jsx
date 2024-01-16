import styled from '@emotion/styled';
export const BlogWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

export const BlogItem = styled.div`
  width: calc(50% - 35px);
  margin: 10px;
  text-align: center;
  :hover {
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
  }
  @media (width < 770px) {
    width: calc(100% - 35px);
  }
`;

export const ImgBlog = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

