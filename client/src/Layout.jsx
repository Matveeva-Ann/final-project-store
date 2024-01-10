import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

import Snowfall from 'components/AnimationSnowfall/Snowfall';
import { Main } from 'Layout.style';

export default function Layout() {
  return (
    <>
      <Snowfall></Snowfall>
      <Header></Header>
      <Main>
        <Outlet></Outlet>
      </Main>
      <Footer></Footer>
      <ScrollToTopButton/>
    </>
  );
}
