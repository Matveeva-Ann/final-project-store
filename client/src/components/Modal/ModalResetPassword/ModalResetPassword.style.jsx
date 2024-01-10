import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-align: center;
  color: var(--textColor);
`;

export const Text = styled.p`
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: var(--textColor);
  text-align: center;
  margin: 0 auto 20px;
  max-width: 60%;
`;

export const Input = styled.input`
  width: calc(100% - 30px);
  padding: 5px 15px;
  margin-bottom: 15px;
  height: 40px;
  background-color: transparent;
  border: 1px solid var(--socialSvgColor);
  outline: none;
  font-size: 18px;
  &::placeholder {
    color: var(--socialSvgColor);
    font-size: 15px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`