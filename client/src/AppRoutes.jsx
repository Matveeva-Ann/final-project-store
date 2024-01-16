import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import { lazy, Suspense } from 'react';
import { RequireAuth } from 'hoc/RequireAuth';
import { AuthProvider } from 'hoc/AuthProvider';

const HomePage = lazy(() => import('./pages/Home'));
const CatalogPage = lazy(() => import('./pages/Catalog'));
const ActionsPage = lazy(() => import('./pages/Actions'));
const AboutUsPage = lazy(() => import('./pages/AboutUs'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const DeliveryPaymentPage = lazy(() => import('./pages/DeliveryPayment'));
const FindUsPage = lazy(() => import('./pages/FindUs'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
export default function AppRoutes() {
  //в fallback={<div>Loading...</div>} замість  <div>Loading...</div> треба буде
  // вставити компонент переходу між сторінками(завантажувач)
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage></HomePage>
                {/* <Navigate to="/" replace /> */}
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
          <Route
            path="/admin"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RequireAuth>
                  <AdminPage />
                </RequireAuth>
              </Suspense>
            }
          />
          <Route
            path="/adminLogin"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AdminLogin></AdminLogin>
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
