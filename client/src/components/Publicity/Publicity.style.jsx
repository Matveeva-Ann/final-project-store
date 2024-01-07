import styled from "@emotion/styled";


export const PublicInfo = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--articleColorBg);
    margin-bottom: 130px;
     @media (width<1025px){
    display: flex;
  flex-direction: column;
   }
`
export const PublicityImg = styled.img`
 object-fit: scale-down;
height:100%;
width:50%;

 @media (width<1025px){
    order:3;
 }
`

export const PublicInline=styled.div`
    display: inline;
    padding:0 50px;
`