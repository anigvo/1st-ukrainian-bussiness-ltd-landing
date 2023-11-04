import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import NotFound from 'pages/NotFound/NotFound';

const Main = lazy(() => import('pages/Main/Main'));
const Team = lazy(() => import('pages/Team/Team'));
const Products = lazy(() => import('pages/Products/Products'));
const Shares = lazy(() => import('pages/Shares/Shares'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="team" element={<Team />} />
        <Route path="products" element={<Products />} />
        <Route path="shares" element={<Shares />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
