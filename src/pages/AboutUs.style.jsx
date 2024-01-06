import styled from '@emotion/styled';

export const AboutUsWrapper=styled.div`
    display: flex;
    padding-top: 70px;
     overflow: hidden;
     @media (width<1025px) {
        /* display:inline-block ; */
        flex-direction: column-reverse;
    }
`
export const AboutUsBlock=styled.div`
    display:block;
    @media (width<1025px) {
        display:inline-block ;
    }
`
export const ImageAboutUs=styled.img`
    display: block;
    size :center;
  /* max-width: 460px; */
  width:auto;
    max-height:350px;
    height:auto;
    padding: 10px;
    z-index:2;
    position:relative;
    @media (width<1025px) {
       width:200px;
       
    }
`
export const ColoredElementAbout=styled.div`
   position: absolute;
      width: 800px; 
      height:1000px; 
      background-color: var(--articleColorBg);
      /* background-color:red; */
      top: 5px;
      right:0;
      z-index:-1;
    @media (width<1025px) {
        display:none;
    }
`
export const PostAbout=styled.p`
    color: var(--textColorSecondary);
  font-family: 'Montserrat', Sans-serif;
  font-size: 20px;
  line-height: 1.5;
 margin:auto;
 padding:20px 30px;
 @media (max-width:1025px) {
    /* order:2; */
    /* display:flex; */
 }
`