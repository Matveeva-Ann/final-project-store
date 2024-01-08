import styled from "@emotion/styled";

export const CatalogWrapper=styled.section`
     text-align:center;
   margin-bottom: 130px;
   
`
export const Image=styled.img`
  display: block;
  height: 340px;
  transition: filter 0.3s ease;
  :hover{
     /* box-shadow: 0 0 30px rgba(0, 0, 0, 0.9); */
         filter: brightness(0.5); 
  }
   
`
export const CatalogGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(4,1fr);
  gap:5px ;
  padding-bottom:70px;
  width: fit-content;
  margin: 0 auto;
   @media (width<1025px){
    grid-template-columns: repeat(2,1fr);
    gap:20px;
    width: fit-content;
  
   }
    @media (width<480px){
      margin: 0 auto;
    grid-template-columns: repeat(1,1fr);
    gap:10px;
   }
`
export const CatalogItem=styled.div`
   position: relative;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const TextOverlay=styled.div`
   position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  padding: 20px;
  font-family: "Montserrat", Sans-serif;
   width:190px;
`
export const TextOverlayOne = TextOverlay;
export const TextOverlayTwo = TextOverlay;
export const TextOverlayThree = TextOverlay;
export const TextOverlayFour = TextOverlay;