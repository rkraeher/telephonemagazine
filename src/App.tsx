import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar } from 'components/Navbar/Navbar';
import { Home } from 'components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from 'components/ErrorPage/ErrorPage';
import { About } from 'components/About';
import { Masthead } from 'components/Masthead';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'masthead',
    element: <Masthead />,
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
