import styled from '@emotion/styled';

export const LinkStyle = styled.a`
  margin-left: 10px;
  color: var(--textColor);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (width < 520px) {
    font-size: 14px;
  }
  @media (width < 390px) {
    font-size: 13px;
  }
`;
