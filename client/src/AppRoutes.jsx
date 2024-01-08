import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/Home'));
const CatalogPage = lazy(() => import('./pages/Catalog'));
const ActionsPage = lazy(() => import('./pages/Actions'));
const AboutUsPage = lazy(() => import('./pages/AboutUs'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const DeliveryPaymentPage = lazy(() => import('./pages/DeliveryPayment'));
const FindUsPage = lazy(() => import('./pages/FindUs'));

export default function AppRoutes() {
  
  //в fallback={<div>Loading...</div>} замість  <div>Loading...</div> треба буде
  // вставити компонент переходу між сторінками(завантажувач)
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage></HomePage>
            </Suspense>
          }
        />
        <Route
          path="/shop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CatalogPage></CatalogPage>
            </Suspense>
          }
        />
        <Route
          path="/actions"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ActionsPage></ActionsPage>
            </Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutUsPage></AboutUsPage>
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <BlogPage></BlogPage>
            </Suspense>
          }
        />
        <Route
          path="/delivery-and-payment"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <DeliveryPaymentPage></DeliveryPaymentPage>
            </Suspense>
          }
        />
        <Route
          path="/find-us"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <FindUsPage></FindUsPage>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
