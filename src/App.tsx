import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar } from 'components/Navbar/Navbar';
import { Home } from 'components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from 'components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <RouterProvider router={router} />
    </div>
  );
};
