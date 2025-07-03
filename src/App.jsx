import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import { Toaster } from 'react-hot-toast';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
const HomePage = lazy(() => import('./pages/Homepage/Homepage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: 'var(--dark)',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: 'var(--green)',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  );
};

export default App;
