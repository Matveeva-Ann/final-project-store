import styled from "@emotion/styled";

export const ButtonStyle=styled.button`
     width: auto;
  height: 48px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border: 2px solid var(--accentColorText); 
  background:var(--accentColorText);
  color:#FFFF;
  font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 500;
  margin: 5px;
  :hover{
    background: #FFF;
    color:var(--accentColorText);
  }
`