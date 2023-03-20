import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';

export const Root = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};
