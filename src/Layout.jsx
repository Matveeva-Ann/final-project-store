import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Snowfall from "components/AnimationSnowfall/Snowfall";
import { Main } from "Layout.style";

export default function Layout() {
  return (
    <>
      <Snowfall></Snowfall>
      <Header></Header>
      <Main>
        <Outlet></Outlet>
      </Main>
    </>
  );
}
