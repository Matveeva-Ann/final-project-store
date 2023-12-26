import { Routes, Route, Router } from "react-router-dom";
import Layout from "./Layout";
// import { lazy, Suspense } from "react";
import Home from "./pages/Home";

// const HomePage = lazy(() => import("./pages/Home"));

export default function AppRoutes() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home></Home>} />
      </Route>
    </Routes>

  );
}
