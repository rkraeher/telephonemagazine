import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';

export const Root = () => {
  return (
    <div>
      {/* when I click the links it looks like the whole page is repainted */}
      <Navbar />
      <Outlet />
    </div>
  );
};
