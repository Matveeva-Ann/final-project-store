import styled from '@emotion/styled';
export const BlogWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const ImgBlog = styled.img`
  width: 450px;
  height: auto;
`;
export const BlogItem = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 10px;
  text-align: center;
  :hover {
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
  }
  /* ::after{
    content: '';
  } */
`;
