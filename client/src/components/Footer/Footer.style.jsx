import styled from '@emotion/styled';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--footerColorBg);
  padding: 50px 13% 40px 13%;

`;
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (width < 770px) {
    flex-direction: column;
  }
`;
export const Category = styled.div`
@media (width < 1150px) {
  display:none;
}
`
export const FooterCopyright = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const FooterContact = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  li {
    font-size: 18px;
    font-weight: 400;
    list-style-type: none;
    color: var(--textColor);
    max-width: 300px;
  }

  li:nth-of-type(odd) {
    padding-bottom: 15px;
  }
  li:nth-of-type(even) {
    padding-bottom: 20px;
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  color: var(--textColor);
`;
export const FaFacebookStyle = styled(FaFacebook)`
  color: var(--titleColor);
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
export const FaInstagramStyle = styled(FaInstagram)`
  color: var(--titleColor);
  width: 40px;
  height: 40px;
`;
