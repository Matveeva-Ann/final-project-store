import styled from "@emotion/styled";

export const CatalogWrapper=styled.section`
     text-align:center;
   margin-bottom: 130px;
`
export const Image=styled.img`
  display: block;
  width: 277px;
  height: 500px;
  transition: box-shadow 0.3s ease;
  :hover{
     box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  }
   
`
export const CatalogGrid = styled.div`
  display:flex;
  gap:10px ;
  padding-bottom:70px;
`
export const CatalogItem=styled.div`
   position: relative;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const TextOverlayFour=styled.div`
   position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 3px;
  font-family: "Montserrat", Sans-serif;
`
export const TextOverlayOne=styled.div`
   position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 3px;
  font-family: "Montserrat", Sans-serif;
`
export const TextOverlayTwo=styled.div`
   position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 3px;
  font-family: "Montserrat", Sans-serif;
`
export const TextOverlayThree=styled.div`
   position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 3px;
  font-family: "Montserrat", Sans-serif;
`