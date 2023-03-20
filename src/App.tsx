import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar } from 'components/Navbar/Navbar';
import { Home } from 'components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from 'components/ErrorPage/ErrorPage';
import { About } from 'components/About';
import { Masthead } from 'components/Masthead';
import { Root } from 'components/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'masthead',
        element: <Masthead />,
      },
      {
        path: '*',
        element: <Home />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
